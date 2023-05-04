<template>
  <div id="page-index">
    <h1>Index Page</h1>
  </div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
  console.log($anime)
})
</script>
