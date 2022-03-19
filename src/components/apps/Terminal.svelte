<script>
  import Window from '../os/Window.svelte';
  import TypedJs from '../TypedJs.svelte';

  let termInput;
  let termOutput = [];

  const sendCommand = async () => {
    termOutput = [...termOutput, termInputValue];
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
</script>

<Window title="Terminal" key="terminal">
  <div class="terminal" on:mousedown={handleFocus} on:touchstart={handleFocus}>
    <div class="terminal-text">
      {#each termOutput as textLine, i}
        <div class="text-line" key={i}>
          <TypedJs string={textLine} />
        </div>
      {/each}
      <div class="input-line">
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
