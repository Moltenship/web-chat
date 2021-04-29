<template>
  <div class='room' :class='{"room--isActive": isActive}' @click='handleClick'>
    {{roomName}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    roomName: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters([ 'currentRoom' ]),
    isActive() {
      return this.roomName == this.currentRoom
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
  &--isActive {
    background: green;
  }
}
</style>