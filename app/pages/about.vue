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

  // Breadcrumb appear
  gsap.from(".about-main .breadcrumb", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power3.out",
  })

  // Hero section
  gsap.from(".about__hero h1", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power3.out",
  })
  gsap.from(".about__hero p", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: 0.2,
    ease: "power3.out",
  })

  // Content section fade in
  gsap.from(".about__content h2, .about__content p", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about__content",
      start: "top 85%",
    },
  })

  // List items stagger
  gsap.utils.toArray<HTMLElement>(".about__content ul li").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      x: -20,
      duration: 0.5,
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
  title: t("seo.about.title"),
  description: t("seo.about.description"),
})
</script>

<template>
  <main class="about-main">
    <div class="about__container">
      <SvgoHeader filled :fontControlled="false" class="svg-decor" />
      <BreadcrumbApp />
      <div class="about-container">
        <section class="about__hero">
          <h1>{{ t("about.heroTitle") }}</h1>
          <p>
            {{ t("about.heroDescription") }}
          </p>
        </section>

        <section class="about__content">
          <h2>{{ t("about.missionTitle") }}</h2>

          <p>
            {{ t("about.missionText1") }}
          </p>

          <p>
            {{ t("about.missionText2") }}
          </p>

          <h2>{{ t("about.whyTitle") }}</h2>

          <ul>
            <li>{{ t("about.features.fast") }}</li>
            <li>{{ t("about.features.responsive") }}</li>
            <li>{{ t("about.features.accurate") }}</li>
            <li>{{ t("about.features.free") }}</li>
          </ul>

          <h2>{{ t("about.visionTitle") }}</h2>

          <p>
            {{ t("about.visionText") }}
          </p>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.about-main {
  position: relative;
  padding: 3rem 1rem;
  width: 100%;
}
.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about__hero {
  text-align: center;

  h1 {
    font-size: clamp(1.4rem, rem-vw(2.5), 2.5rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-size: clamp(1.4rem, rem-vw(1.6), 1.6rem);
  }

  p {
    font-size: px-fs(16, 16, 18);
    line-height: 1.7;
    color: #444;
  }

  ul {
    padding-left: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
}
.svg-decor {
  color: var(--themes-color-svg-about);
}
</style>
