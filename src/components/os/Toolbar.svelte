<script>
  import ToolbarOption from './ToolbarOption.svelte';
  import TaskbarClock from './TaskbarClock.svelte';
</script>

<div class="toolbar-wrapper">
  <div class="toolbar-left">
    <ToolbarOption>File</ToolbarOption>
    <ToolbarOption>Edit</ToolbarOption>
    <ToolbarOption>View</ToolbarOption>
    <ToolbarOption>Go</ToolbarOption>
    <ToolbarOption>Window</ToolbarOption>
    <ToolbarOption>Help</ToolbarOption>
  </div>
  <div class="toolbar-right">
    <TaskbarClock />
  </div>
</div>

<style>
  .toolbar-wrapper {
    z-index: 1;
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
