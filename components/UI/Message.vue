<template>
  <div class="message" :class="mesClass">
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      message: {
        type: String,
        required: true
      },
      mesClass: {
        type: String,
        default: 'success'
      }
    }
  }
</script>

<style lang="scss">

  .message {
    font-size: 22px;

    &.success {
      color: #26de81;
    }
    &.error {
      color: #fc5c65;
    }
  }

</style>
