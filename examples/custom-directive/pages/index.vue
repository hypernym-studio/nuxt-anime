<template>
  <div>
    <h1
      v-anime="{
        rotate: 360,
        backgroundColor: ['#2f495e', '#00c58e'],
        duration: 3000,
        loop: true
      }"
    >
      NUXT ANIMEJS
    </h1>
    <h2
      v-anime.set="{
        color: '#2f495e',
        backgroundColor: '#00c58e'
      }"
    >
      NUXT ANIMEJS
    </h2>
  </div>
</template>

<script>
export default {}
</script>
