<script>
  export let size = 64;

  const MAX_SIZE = 100;
  const MIN_SIZE = 32;

  let moving = false;
  const handleMouseDown = () => {
    moving = true;
  };
  const handleMouseUp = () => {
    moving = false;
  };
  const handleMouseMove = e => {
    if (moving) {
      size = Math.min(Math.max(size - e.movementY, MIN_SIZE), MAX_SIZE);
    }
  };
  let prevTouch;
  const handleTouchMove = e => {
    var touch = e.targetTouches[0];
    if (prevTouch) {
      e.movementY = touch.pageY - prevTouch.pageY;
      handleMouseMove(e);
    }
    prevTouch = touch;
  };

  $: style = `height: ${size - 8}px;`;
</script>

<div
  class="dock-divider"
  {style}
  on:mousedown={handleMouseDown}
  on:touchstart={handleMouseDown}
>
  <div class="dock-divider-line" />
</div>

<svelte:window
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
  on:touchmove={handleTouchMove}
/>

<style>
  .dock-divider {
    /* TODO: Maybe use a url cursor here */
    cursor: ns-resize;
    width: 2px;
    padding: 4px 8px;
  }
  .dock-divider-line {
    /* TODO: Maybe use a url cursor here */
    height: 100%;
    width: 2px;
    background-color: #77777780;
  }
</style>
