<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from "vue"
import { calculators } from "~~/data/calculators"

const localePath = useLocalePath()
const { lt } = useLocalized()
const { t } = useI18n()
defineProps<{ viewAllLink?: string }>()

// 🌈 кольори категорій
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

// 🎨 helper functions
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
  return brightness > 150 ? "#1f2937" : "#fff"
}

// 🛠 масив для відображення
const tools = computed(() =>
  calculators
    .map((calc) => ({
      name: calc.title,
      slug: `/calculators/${calc.category}/${calc.slug}`,
      category: calc.category,
      rating: calc.rating,
    }))
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)
)

// ✅ GSAP анімації
onMounted(async () => {
  if (!import.meta.client) return
  const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ])
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()
  const cards = document.querySelectorAll(".tool-card")
  cards.forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      scale: 0.97,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    })
  })
})
</script>

<template>
  <section class="tools-list">
    <div class="container">
      <h2>{{ t("home.allCalculators") }}</h2>

      <ul class="grid">
        <li v-for="tool in tools" :key="tool.slug">
          <NuxtLink
            :to="localePath(tool.slug)"
            class="tool-card"
            :style="{
              background: getGradient(
                categoryColors.get(tool.category) || '#3b82f6'
              ),
              color: getTextColor(categoryColors.get(tool.category) || '#fff'),
            }"
          >
            <div class="tool-content">
              {{ lt(tool.name) }}
            </div>
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
        </li>
      </ul>

      <ButtonLink
        v-if="viewAllLink"
        :viewAllLink="viewAllLink"
        class="view-all"
      >
        {{ t("home.buttonLink") }}
      </ButtonLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.tools-list {
  padding: 4rem 2rem;
  background: linear-gradient(
    145deg,
    rgba(120, 209, 236, 0.8) 0%,
    rgba(55, 83, 56, 0.9) 50%,
    rgba(59, 77, 18, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  margin-bottom: 4rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      .tool-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 1rem 1.25rem;
        border-radius: 1rem;
        font-weight: 600;
        text-decoration: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        transition:
          transform 0.25s ease,
          box-shadow 0.25s ease,
          filter 0.25s ease;

        .tool-rating {
          margin-top: 8px;
          .star {
            font-size: 0.9rem;
            color: rgba(0, 0, 0, 0.3);
            &.filled {
              color: #ffd700;
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
  }

  .view-all {
    align-self: center;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    h2 {
      font-size: 1.5rem;
    }
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }

  @media (max-width: 480px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
