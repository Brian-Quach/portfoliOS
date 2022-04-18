<script>
  import {onMount} from 'svelte';

  export let query;

  let mql;
  let mqlListener;
  let wasMounted = false;
  let matches = false;
  let width;
  let height;

  onMount(() => {
    wasMounted = true;
    return () => {
      removeActiveListener();
    };
  });

  $: {
    if (wasMounted) {
      removeActiveListener();
      addNewListener(query);
    }
  }

  function addNewListener(query) {
    mql = window.matchMedia(query);
    mqlListener = v => (matches = v.matches);
    mql.addListener(mqlListener);
    matches = mql.matches;
  }

  function removeActiveListener() {
    if (mql && mqlListener) {
      mql.removeListener(mqlListener);
    }
  }
</script>

<slot {matches} {width} {height} />
<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
