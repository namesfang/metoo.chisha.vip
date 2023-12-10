<script lang="ts">
  import FabIcon from '$components/fab-icon/index.svelte';
	import { createEventDispatcher } from 'svelte';

  enum ButtonType {
    button = 'button',
    submit = 'submit',
    reset = 'reset'
  }

  let className = '';
  
  const dispatch = createEventDispatcher();
  const click = ()=> {
    dispatch('click')
  };

  export let title = '';
  export let type = ButtonType.button;
  export let icon: string;
  export { className as class }

  $: className = `${className} fab-icon-button`
</script>

<button on:click={ click } {type} class={className} {title}>
  <FabIcon type={icon}/>
</button>

<style lang="scss">
  .fab-icon-button {
    background-color: transparent;
    border: 0;
  }
</style>