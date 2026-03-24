<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1>{{ t("home.heroTitle") }}</h1>

      <p>
        {{ t("home.heroDescription") }}
      </p>

      <SearchInput :disableDropdown="true" class="search" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: #fff;
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 1rem;
  margin-bottom: 4rem;

  .container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
  }

  .search {
    :deep(input) {
      width: 100%;
      max-width: 400px;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      border: none;
      font-size: 1rem;
      color: #333;
      outline: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

      &::placeholder {
        color: #959799;
      }
    }

    &:focus {
      transform: scale(1.02);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
  }
}

/* Адаптивність */
@media (max-width: 768px) {
  .hero {
    padding: 4rem 1.5rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>
