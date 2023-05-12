<template>
  <div id="page-index">
    <h1>Index Page</h1>
    <button class="float-up-btn">Float Up</button>
  </div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
  console.log($anime)
  // composable can be used as well
  useAnime({
    targets: '.float-up-btn',
    translateY: [-10, 0],
    opacity: [0, 1],
    duration: 2000
  })
})
</script>
