<template>
  <section class="post">
    <div class="container">

      <!-- header -->
      <div class="post-header">
        <img :src="post.img" :alt="post.title">
        <h1 class="title">{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </div>

      <!-- body -->
      <div class="post-body">
        <p>{{ post.content }}</p>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
