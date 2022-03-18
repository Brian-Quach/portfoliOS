<script>
  const wallpaper = 'https://w.wallhaven.cc/full/j3/wallhaven-j3qq15.jpg';

  $: desktopBackgroundStyle = wallpaper
    ? `background-image:url(${wallpaper})`
    : 'background-color:#000';
</script>

<div class="wallpaper" style={desktopBackgroundStyle} />

<style>
  .wallpaper {
    z-index: -999;
    position: absolute;
    top: 0;
    left: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
  }
</style>
