<template>
  <section class="intro">
    <div class="container">
      <h2>{{ title }}</h2>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">

  .intro {
    width: 100%;
    margin: 30px 0;
    text-align: center;
    color: #ffff;
    background-color: #4b40e3;

    h1 {
      font-size: 26px;
    }
  }

</style>
