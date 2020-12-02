<template>
  <div class="page-about">
    <NuxtLink to="/">HOME</NuxtLink>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'scale',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0,
        scale: 0
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        scale: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        scale: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  }
}
</script>

<style>
.page-about {
  display: flex;
  color: #fff;
  background-color: #00c58e;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
</style>
