<template>
  <div class='room' @click='handleClick'>
    {{roomName}}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    roomName: {
      type: String,
      default: '',
    },
  },
  methods: {
    ...mapActions([ 'selectRoom' ]),
    handleClick() {
      this.selectRoom(this.roomName)
    },
  },
}
</script>

<style scoped lang="scss">
.room {
  padding: 12px 0;
  background: aqua;
  &:hover {
    background: red;
  }
}
</style>