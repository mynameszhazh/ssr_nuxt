<template>
  <div>
    <Tutorial />
    <p>{{ counter }}</p>
  </div>
</template>

<script>

export default {
  middleware: ['auth'],
  data () {
    return {
      counter: 'value'
    }
  },
  // 你想要在头部设立的所有标签这里都跟你弄好了，还是很牛逼的
  head () {
    return {
      title: '这个是首页把',
      mata: [{
        name: 'description',
        hid: 'description',
        content: 'login page'
      }],
      link: [{
        rel: 'favicon',
        href: 'favicon.ico'
      }]
    }
  }
}
</script>
