<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput type="email" v-model="user.email">Login:</AppInput>
        <AppInput type="password" v-model="user.password">Password:</AppInput>

        <div class="controls">
          <AppButton>Login!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        // Reset
        this.user.email = ''
        this.user.password = ''
      }
    }
  }
</script>

<style lang="scss">

  .auth {
    text-align: center;
  }

  .auth__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;

    input {
      min-width: 460px;
    }
  }

</style>
