<template>
  <div class="basic-staggering-demo">
    <p class="el">ELEMENT</p>
    <p class="el">ELEMENT</p>
    <p class="el">ELEMENT</p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.staggering()
  },
  methods: {
    staggering() {
      const anime = this.$anime

      anime({
        targets: '.basic-staggering-demo .el',
        translateX: 270,
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
      })
    }
  }
}
</script>
