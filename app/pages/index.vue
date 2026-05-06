<script setup lang="ts">
import { faqs as allFaqs } from "~~/data/faq"
const faqs = allFaqs.slice(0, 3)
const { t } = useI18n()
onMounted(async () => {
  if (!import.meta.client) return

  const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ])

  gsap.registerPlugin(ScrollTrigger)

  await nextTick()

  gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 60,
      scale: 0.96,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // коли верх блоку торкається низу viewport
        end: "center center", // коли центр блоку по центру екрану – анімація завершена
        scrub: 1,
      },
    })
  })

  gsap.utils.toArray<HTMLElement>(".stagger-wrap").forEach((wrap) => {
    const items = Array.from(wrap.children)

    gsap.from(items, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    })
  })

  gsap.utils.toArray<HTMLElement>(".hover-lift").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        y: -8,
        scale: 1.03,
        duration: 0.25,
        ease: "power2.out",
      })
    })

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      })
    })
  })
})

usePageSeo({
  title: t("seo.title"),
  description: t("seo.description"),
})
</script>

<template>
  <main class="home-main">
    <div class="home__container">
      <SvgoHeader filled :fontControlled="false" class="svg-decor" />
      <section class="reveal-section hero">
        <HomeHero />
      </section>

      <section class="reveal-section stagger-wrap">
        <HomeCategories />
      </section>

      <section class="reveal-section stagger-wrap">
        <HomePopularTools />
      </section>

      <section class="reveal-section stagger-wrap">
        <HomeToolsList viewAllLink="/calculators" />
      </section>

      <section class="reveal-section">
        <FaqApp :faqs="faqs" :singleOpen="true" viewAllLink="/faq" />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.svg-decor {
  color: var(--themes-color-svg);
}
.home-main {
  position: relative;
  padding: 2rem;

  .home__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(2rem, rem-vw(3), 3rem);
    color: #1f2937;
    scroll-behavior: smooth;

    > section {
      border-radius: 1rem;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
      padding: clamp(1rem, rem-vw(2), 2rem);
      transform: translateY(0);
      max-width: 1000px;
      width: 100%;
    }
  }
}

.reveal-section {
  will-change: transform, opacity;
}

.stagger-wrap > * {
  will-change: transform, opacity;
}

.hover-lift {
  will-change: transform;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
}

.view-all-btn {
  display: inline-block;
  padding: 14px 42px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 500;
  transition: 0.25s ease;

  &:hover {
    background: black;
    color: white;
  }
}
</style>
