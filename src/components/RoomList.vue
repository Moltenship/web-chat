<template>
  <div class='room__list'>
    <template v-if='rooms.length > 1'>
      <RoomItem :room-name='i' v-for='i in rooms' :key='i' />
    </template>
  </div>
</template>

<script>
import Room from './RoomItem.vue'

export default {
  props: {
    rooms: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    RoomItem,
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
