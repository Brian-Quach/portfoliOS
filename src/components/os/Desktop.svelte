<script>
  import MediaQuery from '../MediaQuery.svelte';

  import Toolbar from './Toolbar.svelte';
  import Wallpaper from './Wallpaper.svelte';
  import Dock from './Dock.svelte';

  import Terminal from '../apps/Terminal.svelte';
  import Files from '../apps/Files.svelte';
  import Mail from '../apps/Mail.svelte';
  import Notes from '../apps/Notes.svelte';
</script>

<MediaQuery query="(min-width: 520px)" let:matches let:height let:width>
  {#if matches}
    <div class="desktop">
      <Wallpaper />
      <Toolbar />
      <Dock />

      <Terminal />
      <Files />
      <Mail />
      <Notes />
    </div>
  {:else}
    <div class="mobile">
      <Notes {width} {height} left={0} top={-20} />
    </div>
  {/if}
</MediaQuery>

<style>
  .desktop {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .mobile {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
