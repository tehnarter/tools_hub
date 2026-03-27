<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="search-mobile">
    <NuxtLink :to="localePath('search')"> 🔍 </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
.search-mobile {
  display: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
