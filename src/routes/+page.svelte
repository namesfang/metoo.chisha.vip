<script lang="ts">
  import FabEmpty from '$components/fab-empty/index.svelte';

  export let data;

  let style = data.visited.count > 1 ? 'padding-bottom: 28rem' : ''
</script>

<div class="container">
  <div class="history-wrapper" style={style}>
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
      <h3>使用记录</h3>
      {#if data.visited.count > 0}
      <ul>
        {#each data.visited.list as t}
          <li>
            <a href="/party/{t.id}">
              <div class="cover">
                <img src={t.cover} alt={t.name}/>
              </div>
              <div class="text">
                <h2>{t.name}</h2>
                <p>{t.desc}</p>
              </div>
            </a>
          </li>
        {/each}
      </ul>
      <p class="tips">共{data.visited.count}条记录</p>
      {:else}
        {#if data.user}
          <p class="tips tips-empty">您可以<a href="">创建</a>或选择<a href="">加入</a></p>
        {:else}
          <FabEmpty>请登录后创建或选择加入</FabEmpty>
        {/if}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    

    .history-wrapper {
      min-height: 100%;
      height: auto;
      overflow: hidden;
      background: {
        color: #bd1818;
        repeat: no-repeat;
        size: 100%;
        position: bottom center;
        image: url(#{$static}/images/home/foot-bg.png);
      }

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
        margin: 0 1rem 1rem;
        border-radius: 1rem;
        box-shadow: 3px 3px 0 #FFC900;
        background-color: rgb(255, 255, 255, .9);
        padding: 0 1rem;

        h3 {
          height: 3rem;
          line-height: 3rem;
          font-size: 1rem;
          color: #999;
        }

        ul {
          height: auto;
          overflow: hidden;
          li {
            padding-bottom: .5rem;
            margin-bottom: .5rem;
            
            &:last-child {
              margin-bottom: 0;
            }

            a {
              padding: .8rem;
              border-radius: .5rem;
              display: flex;
              background-color: #fff;
              &:active {
                background-color: #f2f2f2;
              }
              .cover {
                width: 4rem;
                img {
                  width: 4rem;
                  height: 4rem;
                  display: block;
                }
              }

              .text {
                width: 0;
                flex: 1;
                padding-left: 1rem;
                display: flex;
                justify-content: center;
                flex-direction: column;
                h2 {
                  height: 1.68rem;
                  line-height: 1.68rem;
                  font: {
                    size: 1rem;
                    weight: bold;
                  }
                  color: #FF7E00;
                }
                p {
                  line-height: 1rem;
                  font-size: .86rem;
                  color: #898989;
                }
              }
              
            }
          }
        }

        .tips {
          line-height: 4rem;
          text-align: center;
          font-size: .86rem;
          color: #898989;
          a {
            color: #FF7E00;
          }
        }
      }
    }
  }
</style>