<script>
  export let size = 64;
  export let name = 'Settings';
  export let icon = '/assets/icons/settings.png';
  let onClick = () => {
    console.log('Clicked');
  };

  const disableDrag = e => {
    e.preventDefault();
  };

  $: style = `width: ${size}px; height: ${size}px;`;
</script>

<div class="dock-item" {style}>
  <img
    class="icon"
    alt={name}
    src={icon}
    on:dragstart={disableDrag}
    on:click={onClick}
  />
  <span class="tooltip">{name}</span>
</div>

<style>
  .dock-item {
    position: relative;
  }
  .icon {
    height: 100%;
  }
  .tooltip {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 4px;

    position: absolute;
    bottom: 120%;
    left: 50%;
    width: 80px;
    margin-left: -40px;
  }
  .tooltip::after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
  .dock-item:hover .tooltip {
    visibility: visible;
  }
</style>
