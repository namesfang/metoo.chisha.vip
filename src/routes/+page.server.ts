import { get } from '$lib/request.js';

type Visited = {
  id: number;
  cover: string;
  name: string;
  desc: string;
}
type MetooResult = {
  count: number;
  list: Visited[]
}

export const load = async ({ locals }) => {

  // 获得历史
  const { success, data } = await get('metoo').send<MetooResult>();

  const visited: MetooResult = {
    count: 0,
    list: []
  };

  // if(success) {
  //   visited = data;
  // }
  return {
    user: locals.user,
    static: locals.static,
    visited
  }
}
