<template>
  <div class='auth-form'>
    <h1 class='auth-form__heading'>Enter username</h1>
    <input v-model='username' class='auth-form__input' type='text'>
    <button @click='handleClick' class='auth-form__button'>Submit</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    ...mapMutations([
      'SET_USERNAME',
    ]),
    handleClick() {
      this.SET_USERNAME(this.username)
      this.$router.push('/')
    },
  },
}
</script>

<style scoped lang="scss">
.auth-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  &__heading {
    text-align: center;
    margin: 0;
  }
}
</style>