// 一个nuxt中的store的基本结构
export const state = () => ({
  token: ''
})

export const mutations = {
  init (state, token) {
    state.token = token
  }
}

export const getters = {
  isLogin (state) {
    // 这样的一个小细节操作，就是一个布尔值了 ，难道说
    return !!state.token
  }
}

export const actions = {
  login ({ commit, getters }, u) {
    return this.$login(u).then(({ token }) => {
      if (token) {
        commit('init', token)
      }
      return getters.isLogin
    })
  }
}
