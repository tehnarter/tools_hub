<script setup lang="ts">
const search = ref("")
const router = useRouter()

const handleSearch = () => {
  if (!search.value.trim()) return

  router.push({
    path: "/search",
    query: { q: search.value },
  })
}
</script>

<template>
  <div class="search">
    <input
      v-model="search"
      @keyup.enter="handleSearch"
      placeholder="Search calculator..."
    />
  </div>
</template>
