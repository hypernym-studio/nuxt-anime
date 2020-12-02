<template>
  <div>
    <p class="p1">HELLO WORLD</p>

    <button @click="p2">CLICK ME</button>
    <p class="p2">THIS IS EXAMPLE</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.p1()
  },

  methods: {
    p1() {
      const anime = this.$anime

      anime({
        targets: '.p1',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
      })
    },

    p2() {
      this.$anime({
        targets: '.p2',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
      })
    }
  }
}
</script>
