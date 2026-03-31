<script setup lang="ts">
const localePath = useLocalePath()

const props = defineProps<{
  viewAllLink?: string
}>()
</script>

<template>
  <NuxtLink :to="localePath(props.viewAllLink || '/')" class="view-all-btn">
    <slot />
  </NuxtLink>
</template>
<style scoped lang="scss">
.view-all-btn {
  display: inline-block;
  padding: 14px 42px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgb(177, 173, 173);
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 500;
  transition: 0.5s ease;

  &:hover {
    background: black;
    color: white;
  }
}
</style>
