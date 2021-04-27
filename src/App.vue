<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions([ 'loadUsername' ]),
  },
  created() {
    this.loadUsername()
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
