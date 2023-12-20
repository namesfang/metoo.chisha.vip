<script lang="ts">
  import FabIcon from '$components/fab-icon/index.svelte';
  import FabButton from '$components/fab-button/index.svelte';
  
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
      <FabIcon type="mobile" class="icon"/>
      <input name="phone" autocomplete="off" placeholder="手机号码"/>
    </div>
    <div class="t">
      <FabIcon type="lock" class="icon"/>
      <input type={masking ? 'password' : 'text'} name="password" autocomplete="off" placeholder="登录密码"/>
      <FabButton on:click={toggle} icon={masking ? 'eye-disable' : 'eye'} title="显示/隐藏密码" class="toggle"/>
    </div>
  </div>
  <div class="item forgot-password">
    <a href="/forgot-password">忘记密码</a>
  </div>
  <div class="item action">
    <button type="submit" class="btn submit">登录</button>
  </div>
  <div class="item">
    <p>
      <span>还没有账号，去</span>
      <a href="/signup?redirect=" class="btn">注册</a>
    </p>
  </div>
</form>

<style lang="scss">
  @import '../styles.scss';
  .form-wrapper {
    .forgot-password {
      text-align: right;
      a {
        font-size: 1rem;
        color: var(--text-color);
      }
    }
  }
</style>