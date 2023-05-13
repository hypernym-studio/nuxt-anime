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
})
</script>
