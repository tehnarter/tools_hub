<script setup lang="ts">
const emit = defineEmits<{
  (e: "toggle-menu"): void
}>()

const toggle = () => {
  emit("toggle-menu")
}
</script>

<template>
  <button class="menu-btn" @click="toggle">☰</button>
</template>

<style scoped lang="scss">
.menu-btn {
  display: none;
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 900px) {
  .menu-btn {
    display: block;
  }
}
</style>
