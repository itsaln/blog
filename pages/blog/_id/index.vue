<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post"/>
    <comments :comments="comments"/>
    <newComment :postId="$route.params.id"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import post from '@/components/Blog/Post'
  import newComment from '@/components/Comments/NewComment'
  import comments from '@/components/Comments/Comments'

  export default {
    name: 'index',
    components: {comments, newComment, post},
    async asyncData(context) {
      let [post, comments] = await Promise.all([
        axios.get(`https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.id}.json`),
        axios.get(`https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json`)
      ])

      let commentsArrayRes = Object.values(comments.data)
        .filter(comment => (comment.postId === context.params.id) && !!comment.publish)

      return {
        post: post.data,
        comments: commentsArrayRes
      }
    }
  }
</script>

<style lang="scss">

  .post {
    max-width: 900px;
    margin: 0 auto;
  }
  .post-header {
    text-align: center;
    margin-bottom: 30px;

    img {
      max-width: 600px;
      margin-bottom: 16px;
    }
    p {
      color: #999;
    }
  }
  .post-body {
    text-align: left;
  }

</style>
