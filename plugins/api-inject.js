// 中间介有三个参数这样，插件只有两个参数这样
export default ({ $axios }, inject) => {
  // 就好像进行了一个柯里化的封装一样
  inject('login', (user) => {
    return $axios.$post('/api/login', user)
  })
}
