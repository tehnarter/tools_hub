<script setup lang="ts">
import { onMounted, nextTick } from "vue"

const { t } = useI18n()

onMounted(async () => {
  if (!import.meta.client) return
  const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ])
  gsap.registerPlugin(ScrollTrigger)

  await nextTick()

  // Breadcrumb
  gsap.from(".search-main .breadcrumb", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power3.out",
  })

  // Search input
  gsap.from(".search-main .search", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.2,
    ease: "power3.out",
  })

  gsap.utils
    .toArray<HTMLElement>(".search-main .search-results > *")
    .forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.3 + i * 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      })
    })
})
usePageSeo({
  title: t("seo.search.title"),
  description: t("seo.search.description"),
})
</script>

<template>
  <main class="search-main">
    <div class="search__container">
      <SvgoHeader filled :fontControlled="false" class="svg-decor" />
      <BreadcrumbApp />
      <SearchInput :iconButton="t('search.button')" />
      <div class="search-results">
        <SearchResults />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.search-main {
  position: relative;
  padding: 3rem 1rem;
  width: 100%;

  .search-results {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
.svg-decor {
  color: var(--themes-color-svg-search);
}
</style>
