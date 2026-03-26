<script setup lang="ts">
const localePath = useLocalePath()
defineProps<{
  results: any[]
  show: boolean
  query: string
}>()

const emit = defineEmits(["close"])
const { t } = useI18n()
</script>

<template>
  <div v-if="show" class="search__dropdown">
    <template v-if="results.length">
      <SearchItem
        v-for="item in results"
        :key="item.slug"
        :item="item"
        :query="query"
        @click="emit('close')"
      />

      <div class="search__all">
        <NuxtLink :to="localePath(`/search?q=${query}`)" @click="emit('close')">
          {{ t("search.allResults") }}
        </NuxtLink>
      </div>
    </template>

    <div v-else class="search__empty">
      {{ t("search.noResult") }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.search__dropdown {
  position: absolute;
  top: 40px;
  z-index: 100;
  padding: 1px 5px;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
}
</style>
