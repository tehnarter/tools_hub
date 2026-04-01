<script setup lang="ts">
import type { FAQItem } from "~~/types/faq"
import { ref, nextTick, onMounted } from "vue"

const { t } = useI18n()
const { lt } = useLocalized()

const props = defineProps<{
  faqs: FAQItem[]
  singleOpen?: boolean
  viewAllLink?: string
}>()

const openIndex = ref<number | null>(null)
const answerRefs = ref<HTMLElement[]>([])

let gsap: any = null

onMounted(async () => {
  const gsapModule = await import("gsap")
  gsap = gsapModule.default
})

const toggle = async (index: number) => {
  const prevIndex = openIndex.value

  // 🔁 оновлюємо стан
  if (props.singleOpen) {
    openIndex.value = openIndex.value === index ? null : index
  } else {
    openIndex.value = openIndex.value === index ? null : index
  }

  await nextTick()

  if (!gsap) return

  const currentEl = answerRefs.value[index]
  const prevEl = prevIndex !== null ? answerRefs.value[prevIndex] : null

  // 🔴 Закриваємо попередній
  if (props.singleOpen && prevEl && prevIndex !== index) {
    gsap.to(prevEl, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    })
  }

  // 🟢 Поточний
  if (!currentEl) return

  if (openIndex.value === index) {
    gsap.fromTo(
      currentEl,
      { height: 0, opacity: 0 },
      {
        height: currentEl.scrollHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          currentEl.style.height = "auto"
        },
      }
    )
  } else {
    gsap.to(currentEl, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    })
  }
}

const setRef = (el: HTMLElement | null, index: number) => {
  if (el) answerRefs.value[index] = el
}

const isOpen = (index: number) => openIndex.value === index
</script>

<template>
  <section class="faq">
    <div class="container">
      <h2>{{ t("faq.title") }}</h2>

      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
        :data-index="index"
      >
        <h3 @click="toggle(index)">
          {{ lt(faq.question) }}
          <span :class="{ open: isOpen(index) }">▼</span>
        </h3>
        <p :ref="(el) => setRef(el, index)">
          {{ lt(faq.answer) }}
        </p>
      </div>
    </div>

    <ButtonLink v-if="props.viewAllLink" :viewAllLink="props.viewAllLink">
      {{ t("faq.buttonLink") }}
    </ButtonLink>
  </section>
</template>

<style scoped lang="scss">
.faq {
  padding: clamp(3rem, px-vw(96), 6rem) clamp(1.2rem, px-vw(32), 2rem);
  background-color: #e3dbdb;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  .container {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    font-size: clamp(1.4rem, px-vw(28), 1.8rem);
    font-weight: 700;
    color: #1f2937;
    text-align: center;
    margin-bottom: 2rem;
  }

  .faq-item {
    background-color: var(--themes-card-bg-col);
    padding: clamp(1rem, px-vw(24), 1.5rem) clamp(1rem, px-vw(32), 2rem);
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      background-color 3s ease;

    h3 {
      font-size: clamp(1rem, px-vw(20), 1.25rem);
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.5rem;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 0.8rem;
        color: #6b7280;
        transition: transform 0.3s ease;

        &.open {
          transform: rotate(180deg);
        }
      }
    }

    p {
      font-size: px-fs(16, 16, 18);
      color: #4b5563;
      line-height: 1.6;
      margin: 0;
      overflow: hidden;
      height: 0;
      opacity: 0;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
  }
}
</style>
