<template>
  <PostsList :admin="true" :posts="postLoaded"/>
</template>

<script>
  export default {
    name: 'index',
    layout: 'admin',
    mounted() {
      this.$store.dispatch('nuxtServerInit')
    },
    computed: {
      postLoaded() {
        return this.$store.getters.getPostsLoaded
      }
    }
  }
</script>
