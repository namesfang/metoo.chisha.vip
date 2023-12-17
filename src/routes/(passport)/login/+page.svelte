<script lang="ts">
  import FabIcon from '$components/fab-icon/index.svelte';
  import FabIconButton from '$components/fab-icon-button/index.svelte';
  
  export let form;

  let masking = true;

  let formModel = {
    phone: '',
    password: ''
  }

  const toggle = ()=> {
    masking = !masking
  }

  let formElement: HTMLFormElement;

  const sub = function(e: Event) {
    if(formModel.phone === '' || formModel.password === '') {
      alert('手机号码或密码不能为空')
      e.preventDefault()
      return
    }
  }

</script>

{#if form?.error}
  <p>{ form.error }</p>
  <p>{ form.error2 }</p>
{/if}

<form bind:this={formElement} on:submit={ sub } method="POST" class="form-wrapper">
  <div class="item typing">
    <div class="t">
      <FabIcon type="mobile" class="icon"/>
      <input bind:value={formModel.phone} name="phone" type="text" autocomplete="off" placeholder="手机号码"/>
    </div>
    <div class="t">
      <FabIcon type="lock" class="icon"/>
      <input bind:value={formModel.password} name="password" type="password" placeholder="登录密码"/>
      <FabIconButton on:click={toggle} icon={masking ? 'eye-disable' : 'eye'} title="显示/隐藏密码" class="toggle"/>
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