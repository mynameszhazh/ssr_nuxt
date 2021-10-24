/**
 * 判断用户是否登录的中间介
 * @param {中简介全局参数}} param
 */
export default function ({ route, redirect, store }) {
  if (!store.state.user.token) {
    redirect('/login?redirect=' + route.path)
  }
}
