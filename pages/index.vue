<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro title="My last posts: "/>
    <PostsList :posts="postLoaded"/>
    <contacts/>
  </div>
</template>

<script>
  import promo from '@/components/Promo'
  import contacts from '@/components/Contacts'

  export default {
    name: 'index',
    components: {promo, contacts},
    // asyncData(context) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve({
    //         postsLoaded: [
    //           {
    //             id: 1,
    //             title: 'Post 1',
    //             description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    //             img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    //           }
    //         ]
    //       })
    //     }, 1000)
    //   })
    //     .then(data => {
    //       return data
    //     })
    //     .catch(e => {
    //       context.error(e)
    //     })
    // }
    computed: {
      postLoaded() {
        return this.$store.getters.getPostsLoaded
      }
    }
  }
</script>
