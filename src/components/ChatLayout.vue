<template>
  <div class='chat-layout'>
    <div class='chat'>
      <div v-for='message in chatMessages' :key='message' class='chat__message'>
        {{message.username}}: {{message.message}}
      </div>
    </div>
    <div class='chat-layout__input'>
      <input v-model='chatMessage' type='text'>
      <button @click='handleSubmit'>Send</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      chatMessage: '',
    }
  },
  computed: {
    ...mapGetters([ 'chatMessages' ]),
  },
  methods: {
    ...mapActions([ 'addMessage', 'fetchMessages' ]),
    handleSubmit() {
      this.addMessage(this.chatMessage)
      console.log(this.chatMessages)
      this.chatMessage = ''
    },
  },
  created() {
    this.fetchMessages()
  },
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