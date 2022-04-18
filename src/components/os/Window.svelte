<script>
  import clickOutside from '../../directives/clickOutside';
  import {openedApps, focusedApp} from '../../stores/apps';

  export let title = 'Title';
  export let key;

  export let left = 250;
  export let top = 75;
  export let width = 650;
  export let height = 400;

  let windowVisible = true;
  let windowMaximized = false;
  let moving = false;

  const handleFocus = () => {
    focusedApp.set(key);
  };

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

  const handleCloseWindow = () => {
    openedApps.update(apps => {
      apps[key] = false;
      return apps;
    });
  };

  const handleMinimize = () => {
    windowVisible = false;
  };

  const handleToggleMax = () => {
    windowMaximized = !windowMaximized;
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

  $: focused = $focusedApp === key;
  $: windowStyle =
    `left: ${left}px; top: ${top}px; width: ${width}px;
     z-index: ${focused ? 2 : 0}` + (windowVisible ? '' : 'display: none;');
  $: contentStyle = `height: ${height}px;`;
</script>

<div
  class="window"
  style={windowStyle}
  use:clickOutside
  on:mousedown={handleFocus}
  on:touchStart={handleFocus}
>
  <div
    class="title-bar"
    on:mousedown={handleMouseDown}
    on:touchstart={handleMouseDown}
  >
    <div class="actions left">
      <div class="action close" on:click={handleCloseWindow} />
      <div class="action min" on:click={handleMinimize} />
      <div class="action max" on:click={handleToggleMax} />
    </div>
    <div class="title">{title}</div>
    <div class="right" />
  </div>
  <div class="content" style={contentStyle}><slot /></div>
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
  }

  .close {
    background-color: red;
  }

  .min {
    background-color: yellow;
  }

  .max {
    background-color: green;
  }

  .title {
    user-select: none;
    text-align: center;
  }
  .left,
  .right {
    flex: 1;
  }
  .content {
    height: 100%;
    overflow: scroll;
  }
</style>
