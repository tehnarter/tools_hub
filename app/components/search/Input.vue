<script setup lang="ts">
import { ref, watch } from "vue"
import { useDebounceFn } from "@vueuse/core"
import { calculators } from "~~/data/calculators"
const props = defineProps<{
  iconButton?: string
  disableDropdown?: boolean
}>()
const { locale, t } = useI18n()
const search = ref("")
const results = ref<(typeof calculators)[number][]>([])
const showDropdown = ref(false)
// внутрішній computed для керування відкриттям
const internalShowDropdown = computed(
  () => !props.disableDropdown && showDropdown.value
)
import { useRouter } from "vue-router"
const router = useRouter()

const goToSearchPage = () => {
  const q = search.value.trim()
  if (!q) return

  router.push({
    path: "/search",
    query: { q },
  })

  search.value = "" // ⬅ очищення інпуту
  showDropdown.value = false // ⬅ закриваємо dropdown
}

const showDropdowns = () => {
  search.value = "" // ⬅ очищення інпуту
  showDropdown.value = false // ⬅ закриваємо dropdown
}
// 🔍 Функція пошуку
const runSearch = () => {
  const q = search.value.toLowerCase()
  if (q.length < 3) {
    results.value = []
    showDropdown.value = false
    return
  }

  const filtered = calculators.filter((c) => {
    const title = c.title[locale.value as string]?.toLowerCase() || ""
    const desc = c.description[locale.value as string]?.toLowerCase() || ""
    return title.includes(q) || desc.includes(q)
  })

  results.value = filtered.slice(0, 5)
  showDropdown.value = true
}

// debounce для вводу
const debouncedSearch = useDebounceFn(runSearch, 300)
watch(search, () => debouncedSearch())
</script>

<template>
  <div class="search">
    <input
      v-model="search"
      type="text"
      :placeholder="t('search.placeholder')"
      autocomplete="off"
      @keydown.enter.prevent="goToSearchPage"
    />
    <SearchButton @click="goToSearchPage" :iconButton="props.iconButton" />
    <SearchDropdown
      :results="results"
      :show="internalShowDropdown"
      :query="search"
      @close="showDropdowns"
    />
  </div>
</template>

<style scoped lang="scss">
.search {
  position: relative;

  input {
    width: 100%;
    padding: 10px 40px 10px 10px; // місце під кнопку
    border-radius: 2px;
    color: #1f2937;
    background-color: #eff0f3;
  }
}
</style>
