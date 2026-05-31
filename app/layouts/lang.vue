<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="layout">
    <NuxtLoadingIndicator
      :throttle="0"
      color="#9ca0a6"
      error-color="#e53935"
      :height="3"
      :duration="2000"
    />

    <div class="wrapper">
      <header class="header">
        <div class="header__container header-row">
          <div class="logo">Smart<span>Tools</span></div>
          <div class="header-actions">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main class="page-content">
        <NuxtPage />
      </main>

      <footer class="footer">
        <div class="footer__container footer-row">
          <div class="footer-brand">© {{ year }} Smart<span>Tools</span>.</div>

          <p>All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
}

.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(15, 15, 15, 0.7);
  .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
  @media (max-width: 768px) {
    padding: 0.9rem 1rem;
    .header-row {
      height: 40px;
    }
  }
}

.logo {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 800;
  text-decoration: none;
  color: #fff;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.8;
  }

  span {
    color: #2575fc;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.page-content {
  flex: 1;
  width: 100%;
}

.footer {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1rem 2rem;
  background-color: var(--themes-footer-background);
  color: #aaa;
  transition:
    background-color 3s ease,
    color 3s ease;
  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer-brand {
  font-size: 0.95rem;
  color: #8b8b8b;

  span {
    color: #2575fc;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
}
</style>
