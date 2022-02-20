<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New Comment:</h2>

      <!-- message -->
      <Message v-if="message" :message="message"/>

      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->
        <AppInput v-model="comment.name">Name:</AppInput>
        <!-- text -->
        <AppTextArea v-model="comment.text">Text:</AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton>Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import AppButton from '@/components/UI/Controls/Button'
  import AppInput from '@/components/UI/Controls/Input'
  import AppTextArea from '@/components/UI/Controls/TextArea'
  import Message from '@/components/UI/Message'

  export default {
    name: 'NewComment',
    components: {AppButton, AppInput, AppTextArea, Message},
    data() {
      return {
        message: null,
        comment: {
          name: '',
          text: '',
        }
      }
    },
    methods: {
      onSubmit() {
        this.message = 'Submited!'
        // Reset
        this.comment.name = ''
        this.comment.text = ''
      }
    }
  }
</script>

<style lang="scss">

  .new-comment {
    text-align: center;

    .contact-form {
      max-width: 600px;
      margin: 30px auto;
    }

    .controls {
      margin: 30px 0;
    }
  }

</style>
