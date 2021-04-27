<template>
  <div class='room'>
    {{roomName}}
  </div>
</template>

<script>
export default {
  props: {
    roomName: {
      type: String,
      default: '',
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