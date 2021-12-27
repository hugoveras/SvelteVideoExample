<script>
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<div class="modal-background" transition:fade="{{delay: 0, duration: 300}}"></div>

<div class="modal" on:click="{() => dispatch('close')}" transition:fade="{{delay: 0, duration: 300}}">
  <div class="modal-header">
    <button class="close" on:click="{() => dispatch('close')}">&times;</button>
    <slot name="header"></slot>
  </div>

  <slot></slot>

  <div class="modal-footer">
    <button on:click="{() => dispatch('close')}">Close</button>
  </div>
</div>
