<script>
  import DockItem from './DockItem.svelte';
  import DockDivider from './DockDivider.svelte';
</script>

<div class="dock-wrapper">
  <div class="dock">
    <DockItem />
    <DockItem />
    <DockItem />
    <DockItem />
    <DockItem />
    <DockItem />
    <DockDivider />
    <DockItem />
    <DockItem />
    <DockItem />
  </div>
</div>

<style>
  .dock-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dock {
    border-radius: 16px;
    margin: 4px;
    padding: 12px 24px;
    display: flex;
    gap: 16px;

    background-color: #77777740;
  }
</style>
