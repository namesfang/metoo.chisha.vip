<script lang="ts">
  import { page } from '$app/stores';
  
  export let data;

  console.log($page);
</script>

<div class="container">
  <div class="history-wrapper">
    <div class="discover">
      <img src="{data.static}/images/home/head-bg2.png" alt="" class="png"/>
      <ul class="toolbar">
        <li>
          <a href="/login">登录</a>
        </li>
        <li>
          <a href="/signup">注册</a>
        </li>
      </ul>
    </div>
    <div class="history">
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

    .history-wrapper {
      .discover {
        height: auto;
        overflow: hidden;
        position: relative;
        .png {
          width: 100%;
          height: auto;
          display: block;
        }

        .toolbar {
          width: 50%;
          position: absolute;
          right: 1rem;
          bottom: 1.6rem;
          display: flex;

          li {
            flex: 1;
            height: 2.6rem;
            display: flex;
            margin-left: .8rem;

            &:first-child {
              margin-left: 0;
            }
          }

          a {
            flex: 1;
            height: 2.6rem;
            line-height: 2rem;
            text-align: center;
            text-decoration: none;
            text-indent: -4px;
            font: {
              weight: bold;
              size: 1rem;
            }
            color: #fff;
            margin-left: 4px;
            background-color: #725a02;
            position: relative;
            z-index: 1;

            &::before {
              content: "";
              width: 100%;
              height: 100%;
              background-color: #FFC900;
              position: absolute;
              top: -4px;
              left: -4px;
              z-index: -1;
            }

            &:active {
              line-height: 2.6rem;
              text-indent: 0;
              &::before {
                top: -1px;
                left: -1px;
              }
            }
          }
        }
      }
      
      .history {
        margin: 0 1rem;
        border-radius: 1rem;
        box-shadow: 3px 3px 0 #FFC900;
        background-color: #fff;
        padding: 0 1rem;

        h2 {
          height: 3rem;
          line-height: 3rem;
          font-size: 1rem;
          color: #FF7E00;
        }
      }
    }
  }
</style>