<script setup lang="ts">
import {
  shallowRef,
  defineAsyncComponent,
  computed,
  watch,
  nextTick,
  ref,
  onMounted,
} from "vue"
import { useRoute, useRouter } from "vue-router"
import { calculators } from "~~/data/calculators"

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const langPath = useLangPath()
const { lt } = useLocalized()

const slug = route.params.slug as string[] | undefined
const category = slug?.[0]
const calculatorSlug = slug?.[1]

if (!category) router.push("/calculators")

const categoryCalculators = computed(() =>
  calculators.filter((c) => c.category === category)
)

const calculator = computed(() =>
  calculators.find((c) => c.slug === calculatorSlug && c.category === category)
)

const relatedCalculators = computed(() =>
  categoryCalculators.value.filter((c) => c.slug !== calculatorSlug).slice(0, 4)
)

// 🎨 Colors
const colors = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#e11d48",
  "#9333ea",
  "#059669",
  "#0284c7",
]
const headerColor = ref("")
const categoryColors = ref(new Map<string, string>())

//  Utils
const getGradient = (color: string) => {
  const lighten = (hex: string, percent = 40) => {
    const num = parseInt(hex.replace("#", ""), 16)

    if (isNaN(num)) return hex

    let r = (num >> 16) + percent
    let g = ((num >> 8) & 0x00ff) + percent
    let b = (num & 0x0000ff) + percent

    r = Math.min(255, r)
    g = Math.min(255, g)
    b = Math.min(255, b)

    return `rgb(${r},${g},${b})`
  }
  return `linear-gradient(135deg, ${color}, ${lighten(color)})`
}

const getTextColor = (color: string) => {
  const hex = color.replace("#", "")
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#1f2937" : "#fff"
}

// ⚙️ Async calculator
const modules = import.meta.glob("../../../components/calculators/*.vue")
const CalculatorComponent = shallowRef<any>(null)

watch(
  () => calculator.value,
  (val) => {
    if (!val?.component) return
    const loader =
      modules[`../../../components/calculators/${val.component}.vue`]
    if (loader) CalculatorComponent.value = defineAsyncComponent(loader)
  },
  { immediate: true }
)

// 🔍 SEO
const seo = computed(() => {
  if (calculator.value)
    return {
      title: lt(calculator.value.seoTitle),
      description: lt(calculator.value.seoDescription),
    }

  const first = categoryCalculators.value[0]
  if (first)
    return {
      title: t(`seo.${category}.title`),
      description: t(`seo.${category}.description`),
    }

  return { title: t("seo.title"), description: t("seo.description") }
})

watch(seo, (val) => usePageSeo(val), { immediate: true })

// 🔥 GSAP (ОДИН РАЗ)
let gsap: any = null

onMounted(async () => {
  headerColor.value = colors[Math.floor(Math.random() * colors.length)]
  const categories = [...new Set(calculators.map((c) => c.category))]
  categories.forEach((cat) => {
    const random = colors[Math.floor(Math.random() * colors.length)]
    if (cat) categoryColors.value.set(cat, random)
  })

  const [{ default: gsapCore }, { default: ScrollTrigger }] = await Promise.all(
    [import("gsap"), import("gsap/ScrollTrigger")]
  )
  gsap = gsapCore
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()

  const calculatorBox = document.querySelector(".calculator-box")
  if (calculatorBox) {
    // Початковий стан задаємо в CSS, тут лише анімація
    ScrollTrigger.create({
      trigger: calculatorBox,
      start: "top top",
      end: "bottom+=30px top",
      scrub: true,
      onUpdate: (self) => {
        // self.progress від 0 до 1
        const blur = self.progress * 10
        const opacity = 1 - self.progress * 0.7
        calculatorBox.style.filter = `blur(${blur}px)`
        calculatorBox.style.opacity = `${opacity}`
      },
    })
  }
})

// 📌 Accordion
const faqOpenIndex = ref<number | null>(null)
const faqRefs = ref<HTMLElement[]>([])

const setFaqRef = (el: HTMLElement | null, i: number) => {
  if (el) faqRefs.value[i] = el
}

const toggleFaq = async (i: number) => {
  const prev = faqOpenIndex.value
  faqOpenIndex.value = faqOpenIndex.value === i ? null : i

  await nextTick()
  if (!gsap) return

  const current = faqRefs.value[i]
  const prevEl = prev !== null ? faqRefs.value[prev] : null

  if (!current) return

  // kill animations
  gsap.killTweensOf(current)
  if (prevEl) gsap.killTweensOf(prevEl)

  // close previous
  if (prevEl && prev !== i) {
    gsap.to(prevEl, {
      height: 0,
      opacity: 0,
      duration: 0.3,
    })
  }

  // toggle current
  if (faqOpenIndex.value === i) {
    gsap.fromTo(
      current,
      { height: 0, opacity: 0 },
      {
        height: current.scrollHeight,
        opacity: 1,
        duration: 0.4,
        onComplete: () => (current.style.height = "auto"),
      }
    )
  } else {
    gsap.to(current, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      onStart: () => {
        current.style.height = current.scrollHeight + "px"
      },
    })
  }
}
</script>

<template>
  <main class="calculator-main">
    <div class="calculator__container">
      <SvgoHeader
        filled
        :fontControlled="false"
        class="svg-decor"
        :style="{ color: headerColor }"
      />
      <BreadcrumbApp />
      <div class="calculator-container">
        <div class="calculator-page">
          <!-- CATEGORY LIST -->
          <div v-if="category && !calculatorSlug">
            <h1>
              {{ t(`category.${category}`) }}
            </h1>
            <div class="grid">
              <NuxtLink
                v-for="calc in categoryCalculators"
                :key="calc.slug"
                :to="langPath(`calculators/${calc.category}/${calc.slug}/`)"
                class="card hover-lift"
                :style="{
                  background: getGradient(
                    categoryColors.get(calc.category) || '#3b82f6'
                  ),
                  color: getTextColor(
                    categoryColors.get(calc.category) || '#fff'
                  ),
                }"
              >
                <div class="card-content">
                  <h3>{{ lt(calc.title) }}</h3>
                  <p>{{ lt(calc.description) }}</p>
                </div>
                <div class="card-footer">
                  <span
                    v-for="n in 5"
                    :key="n"
                    class="star"
                    :class="{ filled: n <= calc.rating }"
                    >★</span
                  >
                </div>
              </NuxtLink>
            </div>
          </div>

          <div v-else-if="calculator" class="calculator-layout">
            <h1 class="calculator-title">{{ lt(calculator.title) }}</h1>
            <div class="calculator-top">
              <div class="calculator-description">
                <p>{{ lt(calculator.description) }}</p>
                <h2>{{ t("calculators.how") }}</h2>
                <ol>
                  <li v-for="step in lt(calculator.howTo)" :key="step">
                    {{ step }}
                  </li>
                </ol>
                <h2 v-if="calculator.formula">
                  {{ t("calculators.formula") }}
                </h2>
                <p v-if="calculator.formula">{{ calculator.formula }}</p>
              </div>
              <div class="calculator-box">
                <component
                  v-if="CalculatorComponent"
                  :is="CalculatorComponent"
                />
                <p v-else>{{ t("calculators.notCalc") }}</p>
              </div>
            </div>

            <section v-if="calculator.faq?.length" class="calculator-section">
              <h2>{{ t("faq.title") }}</h2>

              <div
                v-for="(item, i) in calculator.faq"
                :key="i"
                class="faq-item"
              >
                <h3
                  @click="toggleFaq(i)"
                  @keydown.enter="toggleFaq(i)"
                  @keydown.space.prevent="toggleFaq(i)"
                  tabindex="0"
                >
                  {{ lt(item.question) }}
                  <span :class="{ open: faqOpenIndex === i }">▼</span>
                </h3>

                <p :ref="(el) => setFaqRef(el, i)">
                  {{ lt(item.answer) }}
                </p>
              </div>
            </section>
            <section
              v-if="relatedCalculators.length"
              class="calculator-section"
            >
              <h2>{{ t("calculators.related") }}</h2>
              <div class="grid">
                <NuxtLink
                  v-for="calc in relatedCalculators"
                  :key="calc.slug"
                  :to="langPath(`calculators/${calc.category}/${calc.slug}/`)"
                  class="card hover-lift"
                  :style="{
                    background: getGradient(
                      categoryColors.get(calc.category) || '#3b82f6'
                    ),
                    color: getTextColor(
                      categoryColors.get(calc.category) || '#fff'
                    ),
                  }"
                >
                  <div class="card-content">
                    <h3>{{ lt(calc.title) }}</h3>
                  </div>
                  <div class="card-footer">
                    <span
                      v-for="n in 5"
                      :key="n"
                      class="star"
                      :class="{ filled: n <= calc.rating }"
                      >★</span
                    >
                  </div>
                </NuxtLink>
              </div>
            </section>
          </div>

          <div v-else>
            <h1>{{ t("calculators.notFound") }}</h1>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.calculator-main {
  position: relative;
  padding: 3rem 1rem;
  width: 100%;
}
.calculator-container {
  max-width: 1200px;
  margin: auto;
}
.calculator-page {
  h1 {
    margin-bottom: 15px;
    font-size: clamp(1.6rem, rem-vw(2), 2rem);
    text-align: center;
  }
}
.calculator-title {
  margin-bottom: 30px;
  font-size: clamp(1.6rem, rem-vw(2), 2rem);
}
.calculator-top {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 40px;
  margin-bottom: 50px;
}
.calculator-description {
  position: relative;
  z-index: 2;
  line-height: 1.7;
  ol {
    padding-left: 18px;
    margin-top: 10px;
  }
  h2 {
    margin: 20px 0 10px 0;
    font-size: clamp(1.2rem, rem-vw(1.5), 1.5rem);
  }
  p {
    margin-bottom: 15px;
  }
}
.calculator-box {
  filter: blur(0px);
  position: sticky;
  top: 20px;
  padding: clamp(5px, px-vw(25), 25px);
  border-radius: 20px;
  border: 1px solid #eee;
  opacity: 1;
  transition:
    box-shadow 0.3s ease,
    filter 0.3s ease,
    opacity 0.3s ease;
  z-index: 1;
  background: rgba(255, 255, 255, 0.05);
  backface-visibility: hidden; // для плавного ефекту
  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
}

.calculator-section {
  margin-bottom: 50px;
  h2 {
    margin-bottom: 15px;
    font-size: clamp(1.2rem, rem-vw(1.5), 1.5rem);
  }
}
.faq-item {
  margin-bottom: 15px;
  padding: 15px 20px;
  border-radius: 12px;
  background-color: var(--themes-card-bg-col);
  transition:
    box-shadow 0.25s ease,
    background-color 3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
  }
  h3 {
    font-size: clamp(1rem, rem-vw(1.2), 1.2rem);
    margin-bottom: 0.3rem;
    color: #01070f;
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
    overflow: hidden;
    height: 0;
    opacity: 0;
  }
}

.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  align-items: stretch;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #eee;
  background: white;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
  .card-content h3 {
    margin-bottom: 6px;
    font-size: 1.2rem;
  }
  .card-content p {
    font-size: px-fs(16, 16, 18);
    opacity: 0.85;
  }
  .card-footer {
    margin-top: 12px;
    .star {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.3);
      &.filled {
        color: #ffd700;
      }
    }
  }
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
}

@media (max-width: 1024px) {
  .calculator-top {
    grid-template-columns: 1fr;
    gap: 70px;
  }
  .calculator-box {
    order: -1;
  }
}
</style>
