<template>
  <div class='chat-layout'>
    <div class='chat'>
      test
    </div>
    <div class='chat-layout__input'>
      <input type='text'>
      <button>Send</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.chat-layout {
  display: grid;
  grid-template-rows: 1fr 64px;
  &__input {
    display: flex;
    input {
      width: 80%;
    }
    button {
      flex-grow: 1;
    }
  }
}
</style>