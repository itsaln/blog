<template>
  <nuxt-link :to="getLink" class="post-preview">
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
      },
      admin: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getLink() {
        return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
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
