<script>
  import ToolbarOption from './ToolbarOption.svelte';
</script>

<div class="toolbar-wrapper">
  <div class="toolbar-left">
    <ToolbarOption>Option 1</ToolbarOption>
    <ToolbarOption>Option 2</ToolbarOption>
    <ToolbarOption>Option 3</ToolbarOption>
  </div>
  <div class="toolbar-right">
    <ToolbarOption>Option 1</ToolbarOption>
    <ToolbarOption>Option 2</ToolbarOption>
    <ToolbarOption>Option 3</ToolbarOption>
  </div>
</div>

<style>
  .toolbar-wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: #d3deea;
    height: 20px;
  }
  .toolbar-left {
    margin-left: 4px;
    display: flex;
  }
  .toolbar-right {
    margin-right: 4px;
    display: flex;
  }
</style>
