<template>
  <section>
    <div class="container">
      <table>
        <!-- thead -->
        <thead>
        <tr><th v-for="(th, index) in thead" :key="index">{{ th }}</th></tr>
        </thead>
        <!-- tbody -->
        <slot name="tbody"></slot>
      </table>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      thead: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">

</style>
