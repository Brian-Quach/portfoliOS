<script>
  import clickOutside from '../directives/clickOutside';
  let isOpen = false;

  const toggleOpen = () => {
    isOpen = !isOpen;
  };
  const closeDropdown = () => {
    isOpen = false;
  };
</script>

<div class="toolbar-option" use:clickOutside on:outclick={closeDropdown}>
  <span class="label" class:label-open={isOpen} on:click={toggleOpen}
    ><slot />
  </span>
  <div class="dropdown" class:dropdown-open={isOpen}>
    <h5>Todo</h5>
    <p>Content here</p>
  </div>
</div>

<style>
  .toolbar-option {
    display: flex;
    user-select: none;
  }
  .label {
    font-size: 0.75rem;
    padding: 0.125rem 1rem;
    border-radius: 2px;
    cursor: default;
  }
  .dropdown {
    display: none;
    top: 100%;
    border-radius: 4px;
    position: absolute;
    background-color: #f9f9f980;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
  }

  .label-open {
    background-color: #777777e6;
  }
  .dropdown-open {
    display: block;
  }
</style>
