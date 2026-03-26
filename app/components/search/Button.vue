<script setup lang="ts">
const props = defineProps<{
  iconButton?: string
}>()

const emit = defineEmits<{
  (e: "click"): void
}>()
</script>

<template>
  <button
    type="button"
    class="search-btn"
    :class="{ 'has-text': props.iconButton }"
    @click="$emit('click')"
    aria-label="Search"
  >
    {{ props.iconButton || "🔍" }}
  </button>
</template>

<style scoped lang="scss">
.search-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
  &.has-text {
    font-size: 0.9rem;
    padding: 6px 10px;
    background: #2575fc;
    color: white;
    border-radius: 6px;
  }
}
</style>
