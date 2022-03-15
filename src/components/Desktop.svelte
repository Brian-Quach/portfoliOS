<script>
  import Toolbar from './Toolbar.svelte';
  import Wallpaper from './Wallpaper.svelte';
  import Dock from './Dock.svelte';

  import Window from './Window.svelte';
  import Terminal from './Terminal.svelte';
</script>

<div class="desktop">
  <Wallpaper />
  <Toolbar />
  <Dock />

  <Window title="Terminal">
    <Terminal />
  </Window>
</div>

<style>
  .desktop {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
