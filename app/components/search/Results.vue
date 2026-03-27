<script setup lang="ts">
import { calculators } from "~~/data/calculators"
import { useRoute } from "vue-router"
import { useI18n } from "vue-i18n"

const route = useRoute()
const { locale, t } = useI18n()

const query = computed(() => String(route.query.q || "").toLocaleLowerCase())

const results = computed(() => {
  if (!query.value) return []

  return calculators.filter((c) => {
    const title = c.title?.[locale.value]?.toLocaleLowerCase() || ""
    const desc = c.description?.[locale.value]?.toLocaleLowerCase() || ""
    return title.includes(query.value) || desc.includes(query.value)
  })
})
</script>

<template>
  <section v-if="query" class="search-page">
    <div v-if="query" class="container">
      <h1 class="title">
        {{ t("search.results") }} :
        <span>"{{ query }}"</span>
      </h1>

      <div v-if="results.length" class="results-grid">
        <SearchItem
          v-for="item in results"
          :key="item.slug"
          :item="item"
          :query="query"
        />
      </div>

      <div v-else class="empty-state">
        {{ t("search.noResults") }}
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.search-page {
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--themes-text);

  span {
    color: #2575fc;
  }
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.empty-state {
  margin-top: 40px;
  padding: 30px;
  text-align: center;

  border-radius: 12px;
  color: #888;
  font-size: 16px;
}
@media (max-width: 768px) {
  .title {
    font-size: 16px;

    margin-bottom: 16px;
  }
}
</style>
