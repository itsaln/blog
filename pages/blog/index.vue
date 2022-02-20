<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo/>
    <Intro title="My posts: "/>
    <PostsList :posts="posts"/>
    <Contacts/>
  </div>
</template>

<script>
  import Intro from '@/components/UI/Intro'
  import PostsList from '@/components/Blog/PostsList'
  import Contacts from '@/components/Contacts'

  export default {
    name: 'index',
    components: {Intro, PostsList, Contacts},
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Post 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          },
          {
            id: 2,
            title: 'Post 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'https://images.unsplash.com/photo-1643970446086-15b7e5523787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80'
          },
          {
            id: 3,
            title: 'Post 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            img: 'https://images.unsplash.com/photo-1628850627071-42b3fb16533d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80'
          }
        ]
      }
    }
  }
</script>
