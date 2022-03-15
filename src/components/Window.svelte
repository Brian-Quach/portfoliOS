<script>
  export let title = 'Title';
  export let left = 100;
  export let top = 100;

  let moving = false;

  const handleMouseDown = () => {
    moving = true;
  };

  const handleMouseUp = () => {
    moving = false;
  };

  const handleMouseMove = e => {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  };

  let prevTouch;
  const handleTouchMove = e => {
    var touch = e.targetTouches[0];
    if (prevTouch) {
      e.movementX = touch.pageX - prevTouch.pageX;
      e.movementY = touch.pageY - prevTouch.pageY;
      handleMouseMove(e);
    }
    prevTouch = touch;
  };

  $: positionStyle = `left: ${left}px; top: ${top}px;`;
</script>

<div class="window" style={positionStyle}>
  <div
    class="title-bar"
    on:mousedown={handleMouseDown}
    on:touchstart={handleMouseDown}
  >
    <div class="actions left">
      <div class="action" />
      <div class="action" />
      <div class="action" />
    </div>
    <div class="title">{title}</div>
    <div class="right" />
  </div>
  <div class="content"><slot /></div>
</div>

<svelte:window
  on:mouseup={handleMouseUp}
  on:touchend={handleMouseUp}
  on:mousemove={handleMouseMove}
  on:touchmove={handleTouchMove}
/>

<style>
  .window {
    border: solid 1px gray;
    background-color: white;
    position: absolute;
    width: 650px;
    border-radius: 4px;
  }
  .title-bar {
    height: 20px;
    display: flex;
    align-items: center;
    background-color: grey;
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 4px;
  }
  .action {
    cursor: pointer;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: green;
  }
  .content {
    height: 400px;
  }
  .title {
    user-select: none;
    text-align: center;
  }
  .left,
  .right {
    flex: 1;
  }
</style>
