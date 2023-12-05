<script lang="ts">
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

  const change = async (e: any)=> {
    const target = e.target as HTMLInputElement

    const files = target.files;

    if(files) {
      const file = files[0] as File;

      const body = new FormData()

      //

      // const amz = {
      //   'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
      //   'X-Amz-Credential': [this.].join('/'),
      // }

      // let name: keyof typeof amz;

      // for(name in amz) {
      //   body.append(name, amz[name]);
      // }

      body.append('key', file.name);
      
      body.append('policy', '');

      body.append('signature', '');
      body.append('file', file);
      const options = {
        body
      }

      const a = await fetch(e.host, options)
      console.log(a)
    }
  }
</script>

<svelte:head>
  <title>我的派对|吃啥网</title>
</svelte:head>

<ul>
  {#each parties as t}
    <li>
      <a href="/metoo/party/{t.id}">{ t.name }</a>
    </li>
  {/each}
</ul>

<a href="/metoo/party/join">加入派对</a>
<a href="/metoo/party/create">创建派对</a>


<input type="file" on:change={ change }/>