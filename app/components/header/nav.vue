<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <NuxtLink to="/about"> About </NuxtLink>

    <NuxtLink to="/calculators"> All Calculators </NuxtLink>

    <NuxtLink to="/faq"> Faq </NuxtLink>

    <NuxtLink to="/contact"> Contact </NuxtLink>
  </nav>
</template>
<style scoped lang="scss">
/* navigation */

.nav {
  display: flex;
  gap: 25px;

  a {
    text-decoration: none;
    color: #444;
    font-weight: 500;
    transition: 0.2s;

    &:hover {
      color: #2575fc;
    }
  }
}
</style>
