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
    return !state.token
  }
}

export const actions = {
  login ({ commit, getters }, u) {
    return this.$axios.$post('/api/login', u).then(({ token }) => {
      if (token) {
        // console.log(token)
        commit('init', token)
      }
      return getters.isLogin
    })
  }
}
