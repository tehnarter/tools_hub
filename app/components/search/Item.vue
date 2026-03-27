<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { locale } = useI18n()
const localePath = useLocalePath()
const props = defineProps<{
  item: any
  query: string
}>()

// 🔥 підсвітка тексту
const highlight = (text: string) => {
  const q = props.query
  if (!q) return text

  const regex = new RegExp(`(${q})`, "gi")
  return text.replace(regex, "<mark>$1</mark>")
}
</script>

<template>
  <NuxtLink
    :to="localePath(`/calculators/${props.item.category}/${props.item.slug}`)"
    class="search__item"
  >
    <div v-html="highlight(props.item.title[locale])" />
  </NuxtLink>
</template>
<style scoped lang="scss">
.search-item {
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  mark {
    background: yellow;
  }
}
</style>
