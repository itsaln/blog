<template>
  <div class="wrapper">
    <Header/>
    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin page">
        <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">New Post</nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite">Comments</nuxt-link>
      </Intro>
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/system/Header'

  export default {
    name: 'admin',
    components: {Header},
    middleware: ['auth']
  }
</script>

<style scoped>

</style>
