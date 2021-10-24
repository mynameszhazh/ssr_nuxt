<template>
  <div>
    <p>{{ $route.params.id }}</p>
    <p>{{ goodInfo }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params, error }) {
    // console.log($axios)
    if (params.id) {
      const { ok, data: goodInfo } = await $axios.$get('/api/detail', { params })
      if (ok) {
        return {
          goodInfo
        }
      } else {
        error({ msg: '出现了错误，数据获取失败', statusCode: 404 })
      }
    } else {
      return {
        goodInfo: null
      }
    }
  }
}
</script>
