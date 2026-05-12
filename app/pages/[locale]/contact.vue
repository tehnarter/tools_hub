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

  // Breadcrumb
  gsap.from(".contact-main .breadcrumb", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    ease: "power3.out",
  })

  // Hero section
  gsap.from(".contact__hero h1", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power3.out",
  })
  gsap.from(".contact__hero p", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: 0.2,
    ease: "power3.out",
  })

  // Contact info + form stagger
  gsap.utils.toArray<HTMLElement>(".contact__content > *").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    })
  })

  // Form inputs stagger
  gsap.utils
    .toArray<HTMLElement>(".contact__form .form-group")
    .forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.3 + i * 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      })
    })

  // Submit button
  gsap.from(".contact__form button", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    delay: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact__form button",
      start: "top 90%",
    },
  })
})

usePageSeo({
  title: t("seo.contact.title"),
  description: t("seo.contact.description"),
})
</script>

<template>
  <main class="contact-main">
    <div class="contact__container">
      <SvgoHeader filled :fontControlled="false" class="svg-decor" />
      <BreadcrumbApp />
      <div class="contact-container">
        <section class="contact__hero">
          <h1>{{ t("contact.heroTitle") }}</h1>
          <p>
            {{ t("contact.heroDescription") }}
          </p>
        </section>

        <section class="contact__content">
          <div class="contact__info">
            <h2>{{ t("contact.infoTitle") }}</h2>
            <p>
              {{ t("contact.infoText") }}
            </p>
            <p>
              📧 {{ t("contact.emailLabel") }}:
              <a href="mailto:support@smarttools.com">
                support@tools.infoo.tech
              </a>
            </p>
          </div>

          <form class="contact__form">
            <div class="form-group">
              <label>{{ t("contact.form.nameLabel") }}</label>
              <input
                type="text"
                :placeholder="t('contact.form.namePlaceholder')"
              />
            </div>

            <div class="form-group">
              <label>{{ t("contact.form.emailLabel") }}</label>
              <input
                type="email"
                :placeholder="t('contact.form.emailPlaceholder')"
              />
            </div>

            <div class="form-group">
              <label>{{ t("contact.form.messageLabel") }}</label>
              <textarea
                rows="5"
                :placeholder="t('contact.form.messagePlaceholder')"
              ></textarea>
            </div>

            <button type="submit">
              {{ t("contact.form.submit") }}
            </button>
          </form>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.contact-main {
  position: relative;
  padding: clamp(1.5rem, rem-vw(3), 3rem), clamp(0.5rem, rem-vw(1), 1rem);
  width: 100%;
}

.contact-container {
  max-width: 900px;
  margin: 0 auto;
  padding: clamp(1rem, rem-vw(2), 2rem);
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.contact__hero {
  text-align: center;

  h1 {
    font-size: clamp(1.7rem, rem-vw(2.2), 2.2rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: px-fs(16, 16, 18);
    color: #555;
  }
}

.contact__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-size: clamp(1.2rem, rem-vw(1.5), 1.5rem);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: px-fs(16, 16, 18);
    line-height: 1.6;
  }

  a {
    color: #2575fc;
    text-decoration: underline;
  }
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .form-group {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    padding: 0.6rem;
    border: 1px solid #ddd;
    border-radius: 6px;
  }

  button {
    padding: 0.7rem;
    background: #2575fc;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
}

@media (max-width: 768px) {
  .contact__content {
    grid-template-columns: 1fr;
  }
}
.svg-decor {
  color: var(--themes-color-svg-contact);
}
</style>
