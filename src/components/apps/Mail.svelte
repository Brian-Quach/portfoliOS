<script>
  import Window from '../os/Window.svelte';
  import {openedApps} from '../../stores/apps';

  $: appOpened = $openedApps.mail;
</script>

{#if appOpened}
  <Window title="Mail" key="mail">
    <h5>TODO</h5>
    <p>Mail</p>
  </Window>
{/if}

<style>
</style>
