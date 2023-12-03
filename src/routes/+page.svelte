<script lang="ts">
import { PUBLIC_STATIC_URL } from "$env/static/public";
export let data;
</script>

<div class="container">
  <div class="history">
    <img src="{PUBLIC_STATIC_URL}/images/home/head-bg2.png" alt="" class="cover"/>
    <div class="">
      <h2>使用记录</h2>
      <ul>
        {#each data.visited as t}
          <li>
            <a href="/party/{t.id}">
              <div class="cover">
                <img src={t.cover} alt=""/>
              </div>
              <h2>{t.name}</h2>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  {#if data.user}
  <div class="dialog">
    <div class="tt"></div>
    <div class="ft">
      <a href="/signup">注册</a>
      <a href="/login">登录</a>
    </div>
  </div>
  {/if}
</div>

<style lang="scss">
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: {
      color: #bd1818;
      repeat: no-repeat;
      size: 100%;
      position: bottom center;
      image: url(#{$static}/images/home/foot-bg.png);
    };

    .history {
      .cover {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }
</style>