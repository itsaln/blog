<template>
  <newPostFrom
    :postEdit="post"
    @submit="onSubmit"
  />
</template>

<script>
  import newPostFrom from '@/components/Admin/NewPostFrom'

  export default {
    name: 'index',
    layout: 'admin',
    components: {newPostFrom},
    data() {
      return {
        post: {
          id: 1,
          title: 'Post 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae consequuntur deleniti dolore enim et excepturi harum ipsam labore laudantium numquam perspiciatis, provident quis quo quos rem, totam ullam.',
          img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
      }
    },
    methods: {
      onSubmit(post) {
        console.log('Post Editing!')
        console.log(post)
      }
    }
  }
</script>

<style scoped>

</style>
