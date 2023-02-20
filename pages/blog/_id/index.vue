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
    head() {
      let title = this.post.title,
        description = this.post.description,
        img = `${this.post.img}`,
        type = 'article'

      return {
        title: title,
        meta: [
          {hid: 'og:title', name: 'og:title', content: title},
          {hid: 'description', name: 'description', content: description},
          {hid: 'og:description', name: 'og:description', content: description},
          {hid: 'og:type', name: 'og:type', content: type},
          {hid: 'og:img', name: 'og:img', content: img}
        ]
      }
    },
    async asyncData(context) {
      let [post, comments] = await Promise.all([
        axios.get(`https://blog-971a5-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.id}.json`),
        axios.get(`https://blog-971a5-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json`)
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
