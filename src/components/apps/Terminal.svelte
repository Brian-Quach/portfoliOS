<script>
  import {onMount} from 'svelte';
  import Window from '../os/Window.svelte';
  import TypedJs from '../TypedJs.svelte';
  import {introDone, openedApps} from '../../stores/apps';

  import {intro, commands} from '../../appdata/terminal';

  let inputVisible = 'display: none;';
  let introText;
  let termInput;
  let terminalOutput = [];

  const enableInput = () => {
    setTimeout(async () => {
      inputVisible = null;
    }, 500);
  };

  const nextIntroText = async () => {
    const text = introText.shift();
    terminalOutput = [
      ...terminalOutput,
      {
        type: 'typed',
        text,
        onComplete: introText.length ? nextIntroText : enableInput
      }
    ];
  };

  const sendCommand = async () => {
    terminalOutput = [
      ...terminalOutput,
      {
        type: 'command',
        text: termInputValue
      }
    ];

    const command =
      termInputValue.indexOf(' ') !== -1
        ? termInputValue.substring(0, termInputValue.indexOf(' '))
        : termInputValue;
    const params = termInputValue.substring(termInputValue.indexOf(' ') + 1);

    const commandFunction = commands[command];
    if (commandFunction) {
      terminalOutput = [
        ...terminalOutput,
        {
          type: 'text',
          text: commandFunction(params)
        }
      ];
    } else {
      terminalOutput = [
        ...terminalOutput,
        {
          type: 'error',
          text: `command not found: ${command}`
        }
      ];
    }
    termInputValue = '';
  };
  const handleKeyDown = async e => {
    if (e.keyCode === 13) {
      sendCommand();
    }
  };
  const handleFocus = async e => {
    e.preventDefault();
    termInput.focus();
  };
  let termInputValue = '';

  let appOpened;
  const handleAppOpened = opened => {
    appOpened = opened;
    if (!opened) {
      terminalOutput = [];
      introText = [];
    }
    if (opened && $introDone.terminal) {
      enableInput();
    }
    if (opened && !$introDone.terminal) {
      introText = intro;
      nextIntroText();
      introDone.update(apps => {
        apps.terminal = true;
        return apps;
      });
    }
  };

  $: handleAppOpened($openedApps.terminal);
</script>

{#if appOpened}
  <Window title="Terminal" key="terminal">
    <div
      class="terminal"
      on:mousedown={handleFocus}
      on:touchstart={handleFocus}
    >
      <div class="terminal-text">
        {#each terminalOutput as line}
          {#if line.type === 'text'}
            <div class="text-line">
              {line.text}
            </div>
          {:else if line.type === 'typed'}
            <TypedJs string={line.text} on:complete={line.onComplete} />
          {:else if line.type === 'command'}
            <div class="text-line">
              <span class="input-prompt">guest@briiquach:~$&nbsp;</span
              >{line.text}
            </div>
          {:else}
            <div class="text-line">{line.text}</div>
          {/if}
        {/each}
        <div class="input-line" style={inputVisible}>
          <span class="input-command">
            <span class="input-prompt">guest@briiquach:~$</span>
            {termInputValue}<span class="cursor" />
          </span>
          <input
            class="term-in"
            bind:this={termInput}
            bind:value={termInputValue}
            on:keydown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  </Window>
{/if}

<style>
  .terminal {
    height: 100%;
    width: 100%;
    color: #b3b3b3;
    background-color: #000000;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .text-line {
    overflow-wrap: break-word;
    display: block;
  }
  .terminal-text {
    padding: 4px;
  }
  .input-line {
    display: flex;
    flex-direction: row;
  }
  .input-command {
    word-break: break-all;
  }

  @keyframes cursor-blink {
    0%,
    50% {
      opacity: 0;
    }
    51%,
    100% {
      opacity: 1;
    }
  }
  .cursor {
    display: inline-block;
    height: 16px;
    width: 5px;
    background-color: #b3b3b3;
    animation: cursor-blink 1s linear infinite;
  }
  .term-in {
    position: absolute;
    right: 100%;
    cursor: default;
    user-select: none;
    display: hidden;
    background-color: transparent;
    color: transparent;
    border: 0;
  }
  .term-in:focus {
    outline: none;
  }
</style>
