import { redirect, type Handle, type RequestEvent } from "@sveltejs/kit";
import { building } from "$app/environment";
import { PUBLIC_STATIC_URL } from "$env/static/public";
import { get } from "$lib/request";

type replaceStack = [string, (event: RequestEvent)=> string];

const mergeLocals = (locals: App.OptionalLocals): App.Locals => {
  return {
    static: PUBLIC_STATIC_URL,
    ...locals,
  }
}

/**
 * 替换HTML
 * @param html 页面内容
 * @param event 事件
 * @returns 
 */
const replaceAll = (html: string, event: RequestEvent)=> {
  const stacks: replaceStack[] = [
    // CDN资源
    [
      '%cdn.assets%',
      (event: RequestEvent)=> {
        return building ? PUBLIC_STATIC_URL : event.url.origin;
      }
    ],
    // 版权
    [
      '%copyright%',
      ()=> {
        return '@'+ String(new Date().getFullYear());
      }
    ]
  ];

  // 遍历替换
  stacks.forEach(([name, callback])=> {
    html = html.replaceAll(name, callback(event))
  })

  return html
}

const authentication = async (event: RequestEvent)=> {
  const path = event.url.pathname;
  const token = event.cookies.get('Authorization');
  const passport = ['/login', '/signup'];
  const clearances = [...passport, '/', '/metoo', '/sitemap.xml', '/help'];
  if(token) {
    // 登录后不允许再访问登录和注册页面
    if(passport.includes(path)) {
      throw redirect(302, '/');
    }
    const { success, message, data } = await get('user/profile').send<User.Info>(event.cookies);
    if(success) {
      event.locals = mergeLocals({
        user: data
      });
    } else {
      console.log(`${message} 获得 user/profile`, success);
    }
  } else {
    // 未登录时且访问的页面需要登录时自动跳转到登录页面
    if(!clearances.includes(path)) {
      throw redirect(302, '/login');
    }
  }
}

// 
export const handle: Handle = async ({ event, resolve })=> {
  //
  event.locals = mergeLocals({
    user: null
  });

  // "/[fallback]" 是sveltekit内部build时需要
  // "/static/*" 是资源
  const { pathname } = event.url;
  console.log('pathname', pathname)
  if(!pathname.includes('/[fallback]')) {
    // 鉴权
    await authentication(event);
  }

  // 替换
  return resolve(event, {
    transformPageChunk: ({ html })=> replaceAll(html, event),
  });
}