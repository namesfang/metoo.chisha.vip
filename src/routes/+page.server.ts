export const load = async ({ locals }) => {
  const visited = [
    {
      id: 1,
      name: '中午吃什么',
      cover: '',
      desc: '',
    }
  ];
  return {
    user: locals.user,
    static: locals.static,
    visited
  }
}
