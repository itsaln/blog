<template>
	<section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title">Page Not Found</p>
        <nuxt-link to="/">Back to main page</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'error'
  }
</script>

<style lang="scss">

  .not-found__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
  }

</style>
