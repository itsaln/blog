<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post"/>
    <Comments :comments="comments"/>
    <NewComment/>
  </div>
</template>

<script>
  import Post from '@/components/Blog/Post'
  import NewComment from '@/components/Comments/NewComment'
  import Comments from '@/components/Comments/Comments'

  export default {
    name: 'index',
    components: {Comments, NewComment, Post},
    data() {
      return {
        post: {
          id: 1,
          title: 'Post 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet beatae consequuntur deleniti dolore enim et excepturi harum ipsam labore laudantium numquam perspiciatis, provident quis quo quos rem, totam ullam.',
          img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        comments: [
          {name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur'},
          {name: 'Charlie', text: 'Lorem ipsum dolor sit amet, consectetur'}
        ]
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
