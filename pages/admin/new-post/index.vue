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
        this.$store.dispatch('addPost', post)
          .then(() => {
            this.$router.push('/admin')
          })
      }
    }
  }
</script>

<style scoped>

</style>
