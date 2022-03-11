<script>
  export let left = 300;
  export let top = 300;

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

  $: positionStyle = `left: ${left}px; top: ${top}px;`;
</script>

<div class="window" style={positionStyle}>
  <div class="title-bar" on:mousedown={handleMouseDown}>
    <div class="actions left">
      <div class="action" />
      <div class="action" />
      <div class="action" />
    </div>
    <div class="title">Window Title</div>
    <div class="right" />
  </div>
  <div class="content"><slot /></div>
</div>

<svelte:window on:mouseup={handleMouseUp} on:mousemove={handleMouseMove} />

<style>
  .window {
    border: solid 1px gray;
    background-color: white;
    position: absolute;
    width: 500px;
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
