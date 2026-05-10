<script setup lang="ts">
const { t } = useI18n()
const langPath = useLangPath()
</script>

<template>
  <div>
    <!-- Десктопна навігація -->
    <nav class="nav-desktop">
      <NuxtLink :to="langPath('about')">{{ t("header.about") }}</NuxtLink>
      <NuxtLink :to="langPath('calculators')">{{ t("header.all") }}</NuxtLink>
      <NuxtLink :to="langPath('faq')">{{ t("header.faq") }}</NuxtLink>
      <NuxtLink :to="langPath('contact')">{{ t("header.contact") }}</NuxtLink>
    </nav>
  </div>
</template>

<style scoped lang="scss">
/* Десктопна навігація */
.nav-desktop {
  display: flex;
  gap: 25px;
}

.nav-desktop a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
  transition: 0.2s;
}
.nav-desktop a:hover {
  color: #2575fc;
}
</style>
