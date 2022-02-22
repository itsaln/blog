<template>
  <newPostFrom @submit="onSubmit"/>
</template>

<script>
  import newPostFrom from '@/components/Admin/NewPostFrom'

  export default {
    name: 'index',
    layout: 'admin',
    components: {newPostFrom},
    methods: {
      onSubmit(post) {
        console.log('Post added!')
        console.log(post)
      }
    }
  }
</script>

<style scoped>

</style>
