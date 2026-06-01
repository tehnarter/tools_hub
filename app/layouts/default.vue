<script setup lang="ts">
const isPolicyOpen = ref(false)
</script>
<template>
  <div class="layout">
    <NuxtLoadingIndicator
      :throttle="0"
      color="#9ca0a6"
      error-color="#e53935"
      :height="3"
      :duration="2000"
    />
    <div class="wrapper">
      <Header />

      <NuxtPage />
      <Footer @open-policy="isPolicyOpen = true" />
      <Teleport to="body">
        <PolicyApp v-if="isPolicyOpen" @close="isPolicyOpen = false" />
      </Teleport>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
