<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { useI18n } from "vue-i18n"

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
// Масив сегментів, фільтруємо порожні і локаль
const segments = route.path
  .split("/")
  .filter(Boolean)
  .filter((seg) => seg !== locale.value) // <-- тут прибираємо мову з URL

const breadcrumbItems = segments.map((seg, index) => {
  const path = "/" + segments.slice(0, index + 1).join("/")
  const translationKey = `breadcrumb.${seg}`
  const name = t(
    translationKey,
    seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  )
  return { name, path }
})

const navigate = (path: string) => {
  router.push(localePath(path))
}
</script>

<template>
  <nav class="breadcrumb">
    <ul>
      <li>
        <a @click.prevent="navigate('/')">{{ t("breadcrumb.home") }}</a>
        <span class="separator">/</span>
      </li>
      <li v-for="(item, index) in breadcrumbItems" :key="index">
        <template v-if="index !== breadcrumbItems.length - 1">
          <a @click.prevent="navigate(item.path)">{{ item.name }}</a>
          <span class="separator">/</span>
        </template>
        <template v-else>
          <span class="current">{{ item.name }}</span>
        </template>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumb {
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  margin-bottom: 2rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;

    .separator {
      margin: 0 0.5rem;
      color: #9ca3af;
    }

    a {
      color: #3b82f6;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;

      &:hover {
        color: #1d4ed8;
      }
    }

    .current {
      font-weight: 600;
    }
  }
}

/* Адаптивність */
@media (max-width: 768px) {
  .breadcrumb {
    font-size: 0.8rem;
  }
}
</style>
