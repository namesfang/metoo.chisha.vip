import { post } from '$lib/request.js';
import { fail, redirect } from '@sveltejs/kit';

type UserInfo = {
  token: string;
}

export function load({ locals }) {
  return {
    locals
  }
}

export const actions = {
  async default({ cookies, request }) {
    const formData = await request.formData();

    const postData = {
      phone: '',
      password: '',
    }

    let name: keyof typeof postData;
    let value;
    for(name in postData) {
      value = formData.get(name);
      if(value) {
        postData[name] = String(value);
      } else {
        return fail(422, {
          error: '校验错误',
          error2: '<p>{ form.error }</p>',
        })
      }
    }

    const { success, code, message, data } = await post('login', postData).send<UserInfo>(cookies);

    if(success) {
      cookies.set('Authorization', data.token, {
        maxAge: 7200,
        sameSite: 'strict',
      });
      throw redirect(302, '/');
    } else {
      throw fail(code, {
        message,
      });
    }
  }
}