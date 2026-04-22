<script setup lang="ts">
const { t } = useI18n()
const value = ref<number | null>(null)
const percent = ref<number | null>(null)
const result = ref<number | null>(null)
const animate = ref(false)

const calculate = () => {
  if (value.value !== null && percent.value !== null) {
    result.value = parseFloat(((value.value * percent.value) / 100).toFixed(2))
    animate.value = true
    setTimeout(() => (animate.value = false), 600)
  }
}
</script>

<template>
  <div class="percentage-calculator">
    <h2 class="calculator-title">{{ t("calculators.percentage.title") }}</h2>
    <p class="calculator-subtitle">
      {{ t("calculators.percentage.description") }}
    </p>

    <div class="calculator-inputs">
      <div class="input-group">
        <label for="value">
          {{ t("calculators.percentage.valueLabel") }}
        </label>
        <input
          type="number"
          id="value"
          v-model.number="value"
          :placeholder="t('calculators.percentage.valuePlaceholder')"
        />
      </div>
      <div class="input-group">
        <label for="percent">
          {{ t("calculators.percentage.percentLabel") }}
        </label>
        <input
          type="number"
          id="percent"
          v-model.number="percent"
          :placeholder="t('calculators.percentage.percentPlaceholder')"
        />
      </div>
    </div>

    <button class="calculate-btn" @click="calculate">
      {{ t("calculators.percentage.calculate") }}
    </button>

    <div v-if="result !== null" class="result" :class="{ animate: animate }">
      <p>
        {{ t("calculators.percentage.result") }}:
        <span>{{ result }}</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.percentage-calculator {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;

  .calculator-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  .calculator-subtitle {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1.5rem;
  }

  .calculator-inputs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;

    .input-group {
      text-align: left;
      label {
        display: block;
        margin-bottom: 0.3rem;
        font-weight: 500;
      }
      input {
        width: 100%;
        padding: 0.6rem 0.8rem;
        border-radius: 12px;
        border: none;
        font-size: 1rem;
      }
    }
  }

  .calculate-btn {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 12px;
    background: #fff;
    color: #2575fc;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .result {
    margin-top: 1.5rem;
    font-size: 1.3rem;
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
