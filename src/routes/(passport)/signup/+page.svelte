<script lang="ts">
  import FabIcon from '$components/fab-icon/index.svelte';
  import FabIconButton from '$components/fab-icon-button/index.svelte';
  
  export let form;

  let masking = true;

  const toggle = ()=> {
    masking = !masking
  }

</script>

{#if form?.error}
  <p>{ form.error }</p>
  <p>{ form.error2 }</p>
{/if}

<form method="POST" class="form-wrapper">
  <div class="item typing">
    <div class="t">
      <FabIcon type="user" class="icon"/>
      <input name="nickname" autocomplete="off" placeholder="昵称"/>
    </div>
  </div>
  <div class="item typing">
    <div class="t">
      <FabIcon type="mobile" class="icon"/>
      <input name="phone" autocomplete="off" placeholder="手机号码"/>
    </div>
    <div class="t">
      <FabIcon type="lock" class="icon"/>
      <input type={masking ? 'password' : 'text'} name="password" autocomplete="off" placeholder="登录密码"/>
      <FabIconButton on:click={toggle} icon={masking ? 'eye-disable' : 'eye'} title="显示/隐藏密码" class="toggle"/>
    </div>
  </div>
  <div class="item action">
    <button type="submit" class="btn submit">注册</button>
  </div>
  <div class="item">
    <p>
      <span>已有账号，去</span>
      <a href="/login?redirect=" class="btn">登录</a>
    </p>
  </div>
</form>

<style lang="scss">
 @import '../styles.scss';
</style>