<template>
  <Layout></Layout>
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout,
  },
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
