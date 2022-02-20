<template>
  <nuxt-link :to="/blog/+post.id" class="post-preview">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h3 class="title">{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'PostPreview',
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">

  .post-preview {
    max-width: 33.33333%;
    padding: 16px;
    margin-bottom: 20px;
    text-align: center;

    img {
      object-fit: cover;
      height: 270px;
      margin-bottom: 16px;
    }
    .post-content {
      p {
        color: #999;
      }
    }
  }

</style>
