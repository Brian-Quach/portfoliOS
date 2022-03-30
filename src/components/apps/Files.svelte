<script>
  import Window from '../os/Window.svelte';
  import {openedApps} from '../../stores/apps';

  $: appOpened = $openedApps.files;
</script>

{#if appOpened}
  <Window title="Files" key="files">
    <h5>TODO</h5>
    <p>Files</p>
  </Window>
{/if}

<style>
</style>
