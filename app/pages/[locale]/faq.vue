<script setup lang="ts">
import { faqs } from "~~/data/faq"
const { t } = useI18n()
onMounted(async () => {
  if (!import.meta.client) return

  const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ])

  gsap.registerPlugin(ScrollTrigger)

  await nextTick()

  gsap.from(".faq-page", {
    opacity: 0,
    y: 60,
    scale: 0.98,
    duration: 1,
    ease: "power3.out",
  })

  gsap.utils.toArray<HTMLElement>(".faq-item").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    })
  })
})
usePageSeo({
  title: t("seo.faq.title"),
  description: t("seo.faq.description"),
})
</script>

<template>
  <main class="faq-main">
    <section class="faq__container">
      <SvgoHeader filled :fontControlled="false" class="svg-decor" />
      <BreadcrumbApp />
      <FaqApp :faqs="faqs" :singleOpen="true" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.faq-main {
  position: relative;
  padding: 3rem 1rem;
  width: 100%;
}

.faq-header {
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2.4rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
  }
}

:deep(.faq-item) {
  border-radius: 12px;
  transition: all 0.25s ease;
  will-change: transform, opacity;

  &:hover {
    transform: translateY(-2px);
  }
}

:deep(.faq-item.active) {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

:deep(.faq-answer) {
  overflow: hidden;
}
.svg-decor {
  color: var(--themes-color-svg-faq);
}
</style>
