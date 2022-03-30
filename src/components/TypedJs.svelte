<script>
  import {createEventDispatcher, onMount} from 'svelte';
  import Typed from 'typed.js';

  const dispatch = createEventDispatcher();
  let text;

  export let string;
  export let typeSpeed = 40;

  onMount(() => {
    if (string) {
      new Typed(text, {
        strings: [string],
        cursorChar: '',
        typeSpeed,
        startDelay: 150,
        onComplete: typed => {
          const cursor = typed.cursor;
          cursor.remove();
          dispatch('complete');
        }
      });
    }
  });
</script>

<div class="typed-js">
  <span bind:this={text} />
</div>

<style>
  .typed-js span {
    overflow-wrap: break-word;
  }
  :global(.typed-js .typed-cursor) {
    display: inline-block;
    height: 16px;
    width: 5px;
    background-color: #b3b3b3;
  }
</style>
