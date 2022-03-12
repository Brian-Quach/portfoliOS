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
    <p>TODO: Content here</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie,
      nisl at sodales euismod, tortor nunc scelerisque ex, quis pellentesque sem
      neque ut orci. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Vivamus quis risus sed est sagittis luctus
      non in orci.
    </p>
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
