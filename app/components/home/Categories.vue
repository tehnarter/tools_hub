<script setup lang="ts">
import { ref, onMounted } from "vue"
import { calculators } from "~~/data/calculators"

const localePath = useLocalePath()
const { t } = useI18n()

// унікальні категорії
const categories = [...new Set(calculators.map((c) => c.category))]

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

//  Map для категорій та кольорів
const categoryColors = ref<Map<string, string>>(new Map())

//  градієнт для бекграунду
const getGradient = (color: string) => {
  if (!color) color = "#3b82f6"
  const lighten = (hex: string, percent: number) => {
    const num = parseInt(hex.replace("#", ""), 16)
    let r = (num >> 16) + percent
    let g = ((num >> 8) & 0x00ff) + percent
    let b = (num & 0x0000ff) + percent
    r = Math.min(255, r)
    g = Math.min(255, g)
    b = Math.min(255, b)
    return `rgb(${r},${g},${b})`
  }
  return `linear-gradient(135deg, ${color}, ${lighten(color, 40)})`
}

// 🌟 колір тексту залежно від фону
const getTextColor = (color: string) => {
  if (!color) color = "#3b82f6"
  const hex = color.replace("#", "")
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 150 ? "#1f2937" : "#ffffff"
}

// 🎨 на клієнті генеруємо рандомні кольори
onMounted(async () => {
  categories.forEach((cat) => {
    const random = colors[Math.floor(Math.random() * colors.length)]
    if (cat && random) categoryColors.value.set(cat, random)
  })

  // GSAP hover
  const { gsap } = await import("gsap")
  const items = document.querySelectorAll(".category-card")
  items.forEach((el) => {
    el.addEventListener("mouseenter", () =>
      gsap.to(el, { y: -6, scale: 1.03, duration: 0.25, ease: "power2.out" })
    )
    el.addEventListener("mouseleave", () =>
      gsap.to(el, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" })
    )
  })
})
</script>

<template>
  <section class="categories">
    <div class="container">
      <h2>{{ t("home.categoriesTitle") }}</h2>

      <!-- рендеримо тільки після того, як categoryColors заповнені -->
      <div class="grid" v-if="categoryColors.size">
        <NuxtLink
          v-for="category in categories"
          :key="category"
          :to="localePath(`/calculators/${category}`)"
          class="category-card"
          :style="{
            background: getGradient(categoryColors.get(category) || '#3b82f6'),
            color: getTextColor(categoryColors.get(category) || '#1f2937'),
          }"
        >
          {{ t(`category.${category}`) }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.categories {
  padding: 4rem 2rem;
  background: linear-gradient(145deg, #a1a6b1, #cfd3db, #e2e6ed);
  border-radius: 1rem;
  margin-bottom: 4rem;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    width: 100%;
  }

  .grid a {
    display: block;
    padding: 1rem 1.5rem;
    font-weight: 600;
    border-radius: 0.75rem;
    text-decoration: none;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transition:
      box-shadow 0.3s ease,
      transform 0.3s ease,
      filter 0.3s ease;
  }
}

/* Адаптивність */
@media (max-width: 768px) {
  .categories {
    padding: 3rem 1.5rem;
    h2 {
      font-size: 1.5rem;
    }
    .grid {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
}

@media (max-width: 375px) {
  .categories {
    padding: 1rem 0.5rem;
    h2 {
      font-size: 1.5rem;
    }
    .grid {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
}
</style>
