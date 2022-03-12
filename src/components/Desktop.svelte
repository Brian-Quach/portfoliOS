<script>
  import Toolbar from './Toolbar.svelte';
  import Wallpaper from './Wallpaper.svelte';
  import Dock from './Dock.svelte';

  import Window from './Window.svelte';
</script>

<div class="desktop">
  <Wallpaper />
  <Toolbar />
  <Dock />

  <Window>
    <h3>Hello!!</h3>
    <p>Content here</p>
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
