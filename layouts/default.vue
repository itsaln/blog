<template>
  <div class="wrapper">
    <Header/>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '@/components/system/Header'

  export default {
    name: 'default',
    components: {Header}
  }
</script>
