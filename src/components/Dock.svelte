<script>
  import DockItem from './DockItem.svelte';
  import DockDivider from './DockDivider.svelte';

  let size = 64;
</script>

<div class="dock-wrapper">
  <div class="dock">
    <DockItem {size} name={'Discord'} icon={'/assets/icons/discord.png'} />
    <DockItem {size} name={'Files'} icon={'/assets/icons/files.png'} />
    <DockItem {size} name={'Mail'} icon={'/assets/icons/mail.png'} />
    <DockItem {size} name={'VS Code'} icon={'/assets/icons/vscode.png'} />
    <DockItem {size} name={'Github'} icon={'/assets/icons/github.png'} />
    <DockItem {size} />
    <DockDivider bind:size />
    <DockItem {size} />
    <DockItem {size} />
    <DockItem {size} />
  </div>
</div>

<style>
  .dock-wrapper {
    user-select: none;
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
    padding: 4px 16px;
    display: flex;

    background-color: #77777740;
  }
</style>
