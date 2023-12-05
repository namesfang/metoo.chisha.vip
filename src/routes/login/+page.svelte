<script lang="ts">
  import FabIcon from '$components/fab-icon/index.svelte';
  import FabButton from '$components/fab-button/index.svelte';
  import FabCheckbox from '$components/fab-checkbox/index.svelte';
  
  export let form;
  export let data;

</script>

{#if form?.error}
  <p>{ form.error }</p>
  <p>{ form.error2 }</p>
{/if}

<div class="wrapper">
  <form method="POST" class="form-container">
    <div class="item brand">
      <img src="{data.locals.static}/images/logo-text.png" alt="" class="png" />
    </div>
    <div class="item typing">
      <div class="t">
        <FabIcon type="mobile" class="icon"/>
        <input name="phone" autocomplete="off" placeholder="手机号码"/>
      </div>
      <div class="t">
        <FabIcon type="lock" class="icon"/>
        <input name="password" autocomplete="off" placeholder="登录密码"/>
        <FabIcon type="icon-eye-disable"/>
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
        <a href="/register?redirect=" class="btn">注册</a>
      </p>
    </div>
  </form>
</div>

<style lang="scss">
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--alerts-status-error);
  }

  .form-container {
    margin: 0 1rem;

    .item {
      margin-bottom: 1.5rem;
    }

    .brand {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .png {
        width: 50%;
        display: block;
      }
    }

    .typing {

      .t {
        height: 2.8rem;
        position: relative;
        :global(.icon) {
          width: 2.8rem;
          height: 2.8rem;
          line-height: 2.8rem;
          text-align: center;
          font-size: 1.6rem;
          color: #a7a7a7;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 100;

          &[class^=icon-eye] {
            left: inherit;
            right: 0;
          }
        }

        input {
          flex: 1;
          width: 100%;
          height: 2.8rem;
          line-height: 1.2rem;
          font-size: 1rem;
          padding: 0.8rem 0 0.8rem 2.8rem;
          border: 1px solid transparent;
          outline: none;
          box-sizing: border-box;
          z-index: 0;
          position: relative;
          &:focus {
            border: 1px solid var(--others-amber) !important;
            outline: 3px solid var(--alerts-status-warning);
            -moz-outline-radius: 0.38rem;
            z-index: 99;
          }
        }
        &:first-child {
          input {
            border-radius: 0.38rem 0.38rem 0 0;
          }
        }
        &:last-child {
          input {
            border-top-width: 0;
            border-radius: 0 0 0.38rem 0.38rem;
          }
        }
      }

      .nickname {
        &:last-child {
          input {
            border-top-width: 1px;
            border-radius: 0.38rem;
          }
        }
      }
    }

    .forgot-password {
      text-align: right;
      a {
        font-size: 1rem;
        color: var(--text-color);
      }
    }

    .action {
      .btn {
        width: 100%;
        height: 2.8rem;
        line-height: 2.8rem;
        font-size: 1rem;
        text-align: center;
        color: var(--primary-700);
        border: 0;
        border-radius: 0.38rem;
        background-color: transparent;
        display: block;
      }
      .submit {
        margin-bottom: 2rem;
        background-color: var(--alerts-status-warning);
      }
    }
    p {
      text-align: center;
      color: var(--text-color);
      a {
        margin-left: 0.5rem;
        text-decoration: underline;
        color: var(--info-color);
      }
    }
  }
</style>