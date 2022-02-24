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
    head() {
      let title = 'My Blog Page!',
        description = 'My SSR Blog! With Nuxt.js!',
        type = 'site'

      return {
        title: title,
        meta: [
          {hid: 'og:title', name: 'og:title', content: title},
          {hid: 'description', name: 'description', content: description},
          {hid: 'og:description', name: 'og:description', content: description},
          {hid: 'og:type', name: 'og:type', content: type}
        ]
      }
    },
    computed: {
      postLoaded() {
        return this.$store.getters.getPostsLoaded
      }
    }
  }
</script>
