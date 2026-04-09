<script setup lang="ts">
import { ref } from "vue"

const weight = ref<number | null>(null)
const height = ref<number | null>(null)
const result = ref<number | null>(null)
const animate = ref(false)
const { t } = useI18n()
const calculate = () => {
  if (weight.value && height.value) {
    const h = height.value / 100
    result.value = parseFloat((weight.value / (h * h)).toFixed(2))
    animate.value = true
    setTimeout(() => (animate.value = false), 600)
  }
}
</script>

<template>
  <div class="calculator-card gradient-orange">
    <h2>{{ t("calculators.bmi.title") }}</h2>
    <p>{{ t("calculators.bmi.description") }}</p>

    <div class="inputs">
      <input
        type="number"
        v-model.number="weight"
        :placeholder="`${t('calculators.bmi.weight')} (kg)`"
      />
      <input
        type="number"
        v-model.number="height"
        :placeholder="`${t('calculators.bmi.height')} (cm)`"
      />
    </div>

    <button @click="calculate">{{ t("calculators.bmi.calculate") }}</button>

    <div v-if="result !== null" class="result" :class="{ animate: animate }">
      BMI: <span>{{ result }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-card {
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  cursor: default;
  color: #fff;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1rem;
    input {
      padding: 0.6rem;
      border-radius: 12px;
      border: none;
      font-size: 1rem;
    }
  }

  button {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 12px;
    background: #fff;
    color: #ff9966;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
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

.gradient-orange {
  background: linear-gradient(135deg, #ff9966, #ff5e62);
}
</style>
