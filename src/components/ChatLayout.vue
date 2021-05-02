<template>
  <div class='chat-layout' v-if='currentRoom'>
    <div class='chat-layout__chat-window'>
      <div v-for='message in chatMessages' :key='message' class='chat__message'>
        {{message.username}}: {{message.message}}
      </div>
    </div>
    <form @submit.prevent='handleSubmit' class='message-form'>
      <input class='message-form__input' v-model='chatMessage' type='text'>
      <button class='message-form__button'>Send</button>
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
  grid-template-rows: 480px 48px;
  &__chat-window {
    overflow-y: scroll;
  }
}
.message-form {
  display: flex;
  &__input {
    width: 80%;
  }
  &__button {
    flex-grow: 1;
  }
}

</style>