<script>
  import Window from '../os/Window.svelte';
  import SvelteMarkdown from 'svelte-markdown';
  import {openedApps} from '../../stores/apps';

  import about from '../../appdata/notes/about.md';
  import experience from '../../appdata/notes/experience.md';
  import projects from '../../appdata/notes/projects.md';

  let openedFile = 0;
  const files = [
    {name: 'About Me', description: 'Learn a bit about me', source: about},
    {
      name: 'Experience',
      description: "Places I've worked at",
      source: experience
    },
    {
      name: 'Projects',
      description: 'Cool things that I built',
      source: projects
    }
  ];

  let width = 850;
  let height = 600;

  $: appOpened = $openedApps.notes;
  $: notesStyle = `width: ${width}px; height: ${height}px`;
  $: fileStyle = `width: ${width - 200}px;`;
</script>

{#if appOpened}
  <Window title="Notes" key="notes" bind:width bind:height>
    <div class="notes" style={notesStyle}>
      <div class="file-select">
        {#each files as file, i}
          <div
            class={`file-select-option${i === openedFile ? ' selected' : ''}`}
            on:click={() => {
              openedFile = i;
            }}
          >
            <h3 class="file-name">{file.name}</h3>
            <p class="file-description">{file.description}</p>
          </div>
        {/each}
      </div>
      <div class="file" style={fileStyle}>
        <SvelteMarkdown source={files[openedFile].source} />
      </div>
    </div>
  </Window>
{/if}

<style>
  .notes {
    display: flex;
    overflow-x: hidden;
  }

  .file-select {
    width: 200px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
  }

  .file-select-option {
    cursor: pointer;
    height: 80px;
    display: flex;
    flex-direction: column;
  }

  .file-name {
    margin: 8px;
  }
  .file-description {
    margin: 0 8px;
  }

  .file-select-option.selected {
    background-color: #b3b3b3;
  }

  .file {
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 8px 16px;
  }
</style>
