<template>
  <div class='chat-layout' v-if='currentRoom'>
    <div class='chat'>
      <div v-for='message in chatMessages' :key='message' class='chat__message'>
        {{message.username}}: {{message.message}}
      </div>
    </div>
    <form @submit.prevent='handleSubmit' class='chat-layout__input'>
      <input v-model='chatMessage' type='text'>
      <button>Send</button>
    </form>
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
    ...mapGetters([ 'chatMessages', 'currentRoom' ]),
  },
  methods: {
    ...mapActions([ 'addMessage', 'fetchMessages' ]),
    handleSubmit() {
      this.addMessage(this.chatMessage)
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
  grid-template-rows: 480px 64px;
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
.chat {
  overflow-y: scroll;
}
</style>