<template>
  <button
    class="btn"
    :class="btnClass"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      btnClass: {
        type: String,
        default: 'btnPrimary'
      }
    }
  }
</script>
