<script setup lang="ts">
import { calculators } from "~~/data/calculators"
const localePath = useLocalePath()
const { lt } = useLocalized()
const { t } = useI18n()
const popularTools = computed(() =>
  [...calculators]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8)
    .map((calc) => ({
      name: calc.title,
      slug: `/calculators/${calc.category}/${calc.slug}`,
      rating: calc.rating,
      category: calc.category, // 👈 ДОДАЛИ
    }))
)
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
  const categories = [...new Set(calculators.map((c) => c.category))]

  categories.forEach((cat) => {
    const random = colors[Math.floor(Math.random() * colors.length)]
    if (cat && random) categoryColors.value.set(cat, random)
  })
})
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

const getTextColor = (color: string) => {
  if (!color) color = "#3b82f6"

  const hex = color.replace("#", "")
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 150 ? "#1f2937" : "#ffffff"
}
</script>

<template>
  <section class="popular-tools">
    <div class="container">
      <h2>{{ t("home.popularTitle") }}</h2>

      <div class="grid">
        <NuxtLink
          v-for="tool in popularTools"
          :key="tool.slug"
          :to="localePath(tool.slug)"
          class="tool-card"
          :style="{
            background: getGradient(
              categoryColors.get(tool.category) || '#3b82f6'
            ),
            color: getTextColor(categoryColors.get(tool.category) || '#1f2937'),
          }"
        >
          <div class="tool-name">{{ lt(tool.name) }}</div>
          <div class="tool-rating">
            <span
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ filled: n <= tool.rating }"
              >★</span
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.popular-tools {
  padding: 4rem 2rem;
  background: linear-gradient(145deg, #495b83, #cfd3db, #333538);
  border-radius: 1rem;
  margin-bottom: 4rem;

  .container {
    max-width: 1200px;
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
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    width: 100%;

    /* щоб всі li займали всю висоту */
    li {
      display: flex;
    }
  }

  .tool-card {
    display: flex;
    flex-direction: column; // вертикальна верстка
    justify-content: space-between; // розтягує контент, рейтинг вниз
    flex: 1; // card займає всю висоту li
    padding: 1.25rem 1.5rem;
    border-radius: 1rem;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      filter 0.25s ease;

    .tool-name {
      margin-bottom: 0.5rem;
    }

    .tool-rating {
      .star {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.5);

        &.filled {
          color: #facc15;
        }
      }
    }

    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      filter: brightness(1.05);
    }
  }
}

/* Адаптивність */
@media (max-width: 768px) {
  .popular-tools {
    padding: 3rem 1.5rem;

    h2 {
      font-size: 1.5rem;
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
    }
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
