<template>
  <div class="page-index">
    <NuxtLink to="about">ABOUT</NuxtLink>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'slide',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        scale: 1,
        opacity: 0,
        top: '-100%'
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        top: ['-100%', 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        top: [0, '100%'],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
  font-family: sans-serif;
}

.page-index {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  color: #e2e8f0;
  background-color: #2f495e;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
</style>
