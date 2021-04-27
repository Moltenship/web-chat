<template>
  <div class='auth'>
    <AuthForm></AuthForm>
  </div>
</template>

<script>
import AuthForm from './AuthForm.vue'
export default {
  components: {
    AuthForm,
  },
}
</script>

<style scoped lang="scss">
.auth {
  width: 33%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>