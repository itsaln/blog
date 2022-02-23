<template>
  <newPostFrom
    :postEdit="post"
    @submit="onSubmit"
  />
</template>

<script>
  import axios from 'axios'
  import newPostFrom from '@/components/Admin/NewPostFrom'

  export default {
    name: 'index',
    layout: 'admin',
    components: {newPostFrom},
    asyncData(context) {
      return axios.get(`https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.postId}.json`)
        .then(({data}) => {
          return {
            post: {...data, id: context.params.postId}
          }
        })
        .catch(e => context.error(e))
    },
    methods: {
      onSubmit(post) {
        this.$store.dispatch('editPost', post)
          .then(() => {
            this.$router.push('/admin')
          })
      }
    }
  }
</script>

<style scoped>

</style>
