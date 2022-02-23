<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro title="My posts: "/>
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
    computed: {
      postLoaded() {
        return this.$store.getters.getPostsLoaded
      }
    }
  }
</script>
