<script lang="ts">
  import FabIcon from '$components/fab-icon/index.svelte';
  import FabButton from '$components/fab-button/index.svelte';
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
      <FabButton icon="out" href="/logout"/>
    </div>
  </div>
  <div class="party-wrapper">
    <div class="header">
      <h2>列表</h2>
      <nav>
        <FabButton icon="plus" link href="/party/join">加入</FabButton>
        <FabButton icon="plus" link href="/party/create">创建</FabButton>
      </nav>
    </div>
    <ul>
      {#each parties as t}
        <li>
          <a href="/metoo/party/{t.id}">{ t.name }</a>
        </li>
      {/each}
    </ul>
  </div>
</div>


<style lang="scss">
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--greyscale-100);

    .mine-wrapper {
      height: 3.8rem;
      padding: 1.28rem;
      margin: .68rem;
      display: flex;
      background-color: var(--others-white);
      border-radius: 3.18rem;
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
        display: flex;
        align-items: center;
        justify-content: flex-end;
        a {
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          line-height: 1.9rem;
          font-size: 1rem;
        }
      }
    }

    .party-wrapper {
      flex: 1;
      height: 0;

      .header {
        height: 1.68rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 .68rem;

        h2 {
          line-height: 1.68rem;
          font-size: 1rem;
        }
      }
      ul {
        height: auto;
        overflow: hidden;
      }
    }
  }
</style>