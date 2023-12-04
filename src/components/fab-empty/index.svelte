<script lang="ts">
  import FabIcon from '$components/fab-icon/index.svelte';

  export let message = '暂无数据'
</script>

<div class="fab-empty">
  <div class="ico">
    <FabIcon type="wan" />
  </div>
  <div class="content">
    <slot>
      <p>{message}</p>
    </slot>
  </div>
</div>