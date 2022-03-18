<script>
  import Toolbar from './Toolbar.svelte';
  import Wallpaper from './Wallpaper.svelte';
  import Dock from './Dock.svelte';

  import Terminal from '../apps/Terminal.svelte';
  import Files from '../apps/Files.svelte';
  import Mail from '../apps/Mail.svelte';
</script>

<div class="desktop">
  <Wallpaper />
  <Toolbar />
  <Dock />

  <Terminal />
  <Files />
  <Mail />
</div>

<style>
  .desktop {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
