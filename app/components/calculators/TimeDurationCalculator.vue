<script setup lang="ts">
const { t } = useI18n()

const time1 = ref<string | null>(null)
const time2 = ref<string | null>(null)
const duration = ref<{ hours: number; minutes: number } | null>(null)

const calculateDuration = () => {
  if (time1.value && time2.value) {
    const [h1, m1] = time1.value.split(":").map(Number)
    const [h2, m2] = time2.value.split(":").map(Number)
    let start = h1 * 60 + m1
    let end = h2 * 60 + m2
    if (end < start) end += 24 * 60
    const diff = end - start
    duration.value = { hours: Math.floor(diff / 60), minutes: diff % 60 }
  }
}
</script>

<template>
  <div class="calculator-card gradient-orange">
    <h2>{{ t("calculators.timeDuration.title") }}</h2>
    <p>{{ t("calculators.timeDuration.description") }}</p>

    <input type="time" v-model="time1" />
    <input type="time" v-model="time2" />

    <button @click="calculateDuration">
      {{ t("calculators.timeDuration.calculate") }}
    </button>

    <div v-if="duration !== null" class="result animate">
      {{ t("calculators.timeDuration.result") }}:
      <span
        >{{ duration.hours }}{{ t("calculators.timeDuration.hours") }}
        {{ duration.minutes }}{{ t("calculators.timeDuration.minutes") }}</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-card {
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(135deg, #ff9966, #ff5e62);
  color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  input {
    padding: 0.6rem;
    border-radius: 12px;
    border: none;
    width: 100%;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.6rem 1.2rem;
    border-radius: 12px;
    background: #fff;
    color: #ff5e62;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  .result {
    margin-top: 1rem;
    font-weight: 600;
    span {
      color: #ffeb3b;
    }
    &.animate {
      animation: pop 0.6s ease;
    }
  }

  @keyframes pop {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
