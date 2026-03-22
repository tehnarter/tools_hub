<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const year = new Date().getFullYear()

const emit = defineEmits<{
  (e: "open-policy"): void
}>()

const openPolicy = () => emit("open-policy")
</script>

<template>
  <footer class="footer">
    <div class="footer-row">
      <!-- brand -->
      <div class="footer-brand">
        <div class="logo">Smart<span>Tools</span></div>
        <p>{{ t("footer.brandDescription") }}</p>
      </div>

      <!-- calculators -->
      <div class="footer-column">
        <h4>{{ t("footer.calculators") }}</h4>
        <NuxtLink :to="localePath('/calculators/math/percentage/')">{{
          t("footer.percentage")
        }}</NuxtLink>
        <NuxtLink :to="localePath('/calculators/general/age/')">{{
          t("footer.age")
        }}</NuxtLink>
        <NuxtLink :to="localePath('/calculators/health/bmi/')">{{
          t("footer.bmi")
        }}</NuxtLink>
        <NuxtLink :to="localePath('/calculators/finance/profit/')">{{
          t("footer.profit")
        }}</NuxtLink>
      </div>

      <!-- categories -->
      <div class="footer-column">
        <h4>{{ t("footer.categories") }}</h4>
        <NuxtLink :to="localePath('/calculators/math')">{{
          t("footer.math")
        }}</NuxtLink>
        <NuxtLink :to="localePath('/calculators/finance')">{{
          t("footer.finance")
        }}</NuxtLink>
        <NuxtLink :to="localePath('/calculators/health')">{{
          t("footer.health")
        }}</NuxtLink>
        <NuxtLink :to="localePath('/calculators/general')">{{
          t("footer.general")
        }}</NuxtLink>
      </div>

      <!-- company -->
      <div class="footer-column">
        <h4>{{ t("footer.company") }}</h4>
        <NuxtLink :to="localePath('about')">{{ t("footer.about") }}</NuxtLink>
        <NuxtLink :to="localePath('faq')">{{ t("footer.faq") }}</NuxtLink>
        <NuxtLink :to="localePath('contact')">{{
          t("footer.contact")
        }}</NuxtLink>
        <button class="policy-btn" @click="openPolicy">
          {{ t("footer.policy") }}
        </button>
      </div>
    </div>

    <div class="footer-bottom">
      © {{ year }} SmartTools. {{ t("footer.copyright") }}.
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: #111;
  color: #aaa;
  margin-top: 60px;

  .footer-row {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    @media (max-width: 374px) {
      grid-template-columns: 1fr;
      gap: 25px;
      padding: 40px 15px;
    }
  }

  .footer-brand {
    .logo {
      font-size: 22px;
      font-weight: 700;
      color: white;
      margin-bottom: 10px;

      span {
        color: #2575fc;
      }

      @media (max-width: 600px) {
        font-size: 20px;
      }
    }

    p {
      line-height: 1.6;

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }

  .footer-column {
    h4 {
      color: white;
      margin-bottom: 15px;

      @media (max-width: 600px) {
        font-size: 16px;
      }
    }

    a,
    .policy-btn {
      display: block;
      text-decoration: none;
      color: #aaa;
      margin-bottom: 8px;
      font-size: 14px;

      &:hover {
        color: #2575fc;
      }

      @media (max-width: 600px) {
        font-size: 13px;
        margin-bottom: 6px;
      }
    }

    .policy-btn {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  }

  .footer-bottom {
    border-top: 1px solid #222;
    text-align: center;
    padding: 20px;
    font-size: 14px;
    color: #777;

    @media (max-width: 600px) {
      font-size: 12px;
      padding: 15px;
    }
  }
}
</style>
