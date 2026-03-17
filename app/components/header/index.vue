<script setup lang="ts">
const mobileMenu = ref(false)

const toggleMenu = () => {
  mobileMenu.value = !mobileMenu.value
}
</script>
<template>
  <header class="header">
    <div class="header__container header-row">
      <!-- logo -->
      <NuxtLink to="/" class="logo"> Smart<span>Tools</span> </NuxtLink>

      <!-- desktop navigation -->
      <HeaderNav :class="{ open: mobileMenu }" />
      <!-- search -->

      <!-- mobile button -->
      <HeaderMobileNav @toggle-menu="toggleMenu" />
      <SearchApp class="search" />
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #e5e5eb;
  border-bottom: 1px solid #eee;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

/* logo */

.logo {
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  color: #111;

  span {
    color: #2575fc;
  }
}

/* mobile menu button */

.menu-btn {
  display: none;
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
}
.search {
  :deep(input) {
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid #ddd;
    outline: none;
  }
}
/* mobile */

@media (max-width: 900px) {
  .nav {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;

    background: white;

    flex-direction: column;
    align-items: center;
    padding: 20px;

    display: none;
  }

  .nav.open {
    display: flex;
  }

  .menu-btn {
    display: block;
  }

  .search {
    display: none;
  }
}
</style>
