<script lang="ts">
	import { PUBLIC_STATIC_URL } from '$env/static/public';
</script>

<div class="wrapper">
  <div class="brand-wrapper">
    <img src="{PUBLIC_STATIC_URL}/images/logo-text.png" alt="" />
  </div>
  <slot/>
</div>

<style lang="scss">
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: {
      color: #bd1818;
      repeat: no-repeat;
      size: 100%;
      position: bottom center;
      image: url(#{$static}/images/home/foot-bg.png);
    }
  }

  .brand-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    img {
      width: 50%;
      display: block;
    }
  }
</style>