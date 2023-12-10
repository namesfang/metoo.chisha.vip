<script lang="ts">
  import FabIcon from '$components/fab-icon/index.svelte';
	import { PUBLIC_STATIC_URL } from '$env/static/public';

  let parties = [
    {
      id: 1,
      name: '黑色星期天',
    },
    {
      id: 2,
      name: '暑期闹翻天',
    }
  ];
</script>

<svelte:head>
  <title>我的派对|吃啥网</title>
</svelte:head>

<div class="wrapper">
  <div class="mine-wrapper">
    <div class="wt">
      <img src="{PUBLIC_STATIC_URL}/images/logo-114.png" alt=""/>
    </div>
    <div class="md">
      <span>堪笑</span>
      <span>152****4999</span>
    </div>
    <div class="et">
      <a href="/logout">
        <FabIcon type="shield-check"/>
      </a>
    </div>
  </div>
  <div class=""></div>
</div>

<ul>
  {#each parties as t}
    <li>
      <a href="/metoo/party/{t.id}">{ t.name }</a>
    </li>
  {/each}
</ul>

<a href="/metoo/party/join">加入派对</a>
<a href="/metoo/party/create">创建派对</a>

<style lang="scss">
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;

    .mine-wrapper {
      height: 3.8rem;
      padding: 1.28rem;
      display: flex;
      .wt {
        width: 3.8rem;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: var(--greyscale-100);
        padding: .28rem;
        img {
          width: 100%;
          display: block;
          border-radius: 50%;
        }
      }

      .md {
        padding: .62rem 1rem;
        display: flex;
        flex-direction: column;
        span {
          height: 1.28rem;
          line-height: 1.28rem;
          font-size: 1rem;
          color: var(--greyscale-900);
          &:last-child {
            color: var(--greyscale-500);
          }
        }
      }

      .et {
        flex: 1;
        background-color: #eef;
        .t {
          line-height: 1.9rem;
          font-size: 1rem;
        }
      }
    }
  }
</style>