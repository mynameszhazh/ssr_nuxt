<template>
  <div>
    <p>detail login</p>
    <nuxt-child />
  </div>
</template>

<script >
export default {
  async asyncData ({ $axios }) {
    // console.log($axios)
    const { ok, goods } = await $axios.$get('/api/goods')
    if (ok) {
      return {
        goods
      }
    }
  },
  data () {
    return {
      loginMsg: '我是一个登录'
    }
  }
}
</script>
