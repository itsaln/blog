<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto itaque quam sint veritatis? Architecto
          deleniti ducimus eius enim, error fugit, illo labore nesciunt nihil non odit officia perspiciatis quo
          quod.</p>
        <Intro title="Lorem ipsum dolor sit amet"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto itaque quam sint veritatis? Architecto
          deleniti ducimus eius enim, error fugit, illo labore nesciunt nihil non odit officia perspiciatis quo
          quod.</p>
        <img src="@/assets/img/about.jpg" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto itaque quam sint veritatis? Architecto
          deleniti ducimus eius enim, error fugit, illo labore nesciunt nihil non odit officia perspiciatis quo
          quod.</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'index',
    head() {
      let title = 'About My SSR Blog!',
        description = 'About My SSR Blog! With Nuxt.js!',
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
    }
  }
</script>

<style lang="scss">

  .about {
    text-align: center;

    p {
      margin-bottom: 10px;
    }
  }

</style>
