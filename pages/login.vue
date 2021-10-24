<template>
  <div class="login">
    <p>user login</p>
    <input v-model="user.username" type="text">
    <input v-model="user.password" type="password">
    <button @click="login">
      登录
    </button>
  </div>
</template>

<script >
export default {
  layout: 'login',
  data () {
    return {
      user: {
        username: '',
        password: null
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/login', this.user).then((ok) => {
        if (ok) {
          const redirect = this.$route.query.redirect || '/'
          // 跳转倒我对应的页面
          this.$router.push(redirect)
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  display:  flex;
  flex-direction:column;
  align-items: center;
  /* align-content: flex-start; */
}
input {
  width: 200px;
  margin-top: 15px;
}
button {
  width: 50px;
  margin-top: 15px;
}
</style>
