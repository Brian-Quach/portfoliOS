<script>
  import {onMount} from 'svelte';
  import moment from 'moment';

  let timestamp = moment();

  onMount(() => {
    const interval = setInterval(() => {
      timestamp = moment();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  $: date = timestamp.format('ddd MMM D');
  $: time = timestamp.format('h:mm A');
</script>

<div class="taskbar-clock">
  <span class="date">{date}</span>
  <span class="time">{time}</span>
</div>

<style>
  .taskbar-clock {
    display: flex;
    user-select: none;
    padding: 0 4px;
  }
  .date,
  .time {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.1rem 0.25rem;
  }
</style>
