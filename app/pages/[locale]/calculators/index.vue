<script setup lang="ts">
import { calculators } from "~~/data/calculators"
import { ref, onMounted, nextTick } from "vue"

const langPath = useLangPath()
const { lt } = useLocalized()
const { t } = useI18n()

// категорії
const categories = [...new Set(calculators.map((c) => c.category))]
const calculatorsByCategory = categories.map((category) => ({
  name: category,
  items: calculators.filter((c) => c.category === category),
}))

// кольори категорій
const colors: string[] = [
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
const categoryColors = ref<Map<string, string>>(new Map())
onMounted(() => {
  categories.forEach((cat) => {
    const random = colors[Math.floor(Math.random() * colors.length)]
    if (cat && random) categoryColors.value.set(cat, random)
  })
})

// градієнт для картки
const getGradient = (color: string) => {
  const lighten = (hex: string, percent = 40) => {
    const num = parseInt(hex.replace("#", ""), 16)
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

// колір тексту під градієнт
const getTextColor = (color: string) => {
  const hex = color.replace("#", "")
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 150 ? "#1f2937" : "#fff"
}

// формат назви категорії
const formatCategory = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1)

// GSAP анімації
onMounted(async () => {
  if (!import.meta.client) return
  const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ])
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()

  // reveal блоки
  gsap.utils.toArray<HTMLElement>(".category-block").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 80,
      scale: 0.97,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    })
  })

  // hover карток
  gsap.utils.toArray<HTMLElement>(".card.hover-lift").forEach((el) => {
    el.addEventListener("mouseenter", () =>
      gsap.to(el, { y: -6, scale: 1.03, duration: 0.25, ease: "power2.out" })
    )
    el.addEventListener("mouseleave", () =>
      gsap.to(el, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" })
    )
  })
})
usePageSeo({
  title: t("seo.all.title"),
  description: t("seo.all.description"),
})
</script>

<template>
  <main class="calculators-main">
    <div class="calculators__container">
      <SvgoHeader filled :fontControlled="false" class="svg-decor" />
      <BreadcrumbApp />
      <div class="container">
        <h1 class="page-title">{{ t("home.allCalculators") }}</h1>

        <div
          v-for="category in calculatorsByCategory"
          :key="category.name"
          class="category-block"
        >
          <h2 class="category-title">
            <NuxtLink :to="langPath(`calculators/${category.name}/`)">
              {{ t(`category.${category.name}`) }}
            </NuxtLink>
          </h2>

          <div class="grid">
            <NuxtLink
              v-for="calc in category.items"
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
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.calculators-main {
  position: relative;
  padding: 3rem 1rem;
  width: 100%;

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .page-title {
    font-size: clamp(1.6rem, rem-vw(2.5), 2.5rem);
    margin-bottom: 2rem;
  }

  .category-block {
    margin-bottom: 3.5rem;
  }

  .category-title {
    font-size: clamp(1.4rem, rem-vw(1.6), 1.6rem);
    margin-bottom: 1.2rem;
    a {
      position: relative;
      text-decoration: none;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0%;
        height: 2px;
        background: #6366f1;
        transition: width 0.3s ease;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }

  .grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      background 0.4s ease;

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
        color: rgba(255, 255, 255, 0.65);
        &.filled {
          color: #ffd700;
        }
      }
    }

    &:hover {
      transform: translateY(-6px) scale(1.03);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    }
  }
}

/* Адаптивність */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
.svg-decor {
  color: var(--themes-color-svg-all);
}
</style>
