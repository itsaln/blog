<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments:</h2>
      <div class="comment" v-for="comment of comments" :key="comment.name">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Comments',
    props: {
      comments: {
        type: Array,
        default: null
      }
    }
  }
</script>

<style lang="scss">

  .comments {
    text-align: center;
    margin: 30px auto;
  }
  .comment {
    width: 600px;
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .04);
    border-radius: 4px;

    .name {
      font-size: 24px;
      color: #5c4de7;
      margin-bottom: 12px;
    }
  }

</style>
