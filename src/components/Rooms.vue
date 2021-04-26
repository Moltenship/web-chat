<template>
  <div class='room__list'>
    <Room v-for='i in 10' :key='i' />
  </div>
</template>

<script>
import Room from './Room.vue'

export default {
  components: {
    Room,
  },
  methods: {
    test() {
      console.log('test')
    },
  },
}
</script>

<style lang="scss" scoped>
.room__list {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
}
</style>
