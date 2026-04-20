<script setup lang="ts">
const { t } = useI18n()

const principal = ref<number | null>(null)
const rate = ref<number | null>(null)
const months = ref<number | null>(null)
const result = ref<number | null>(null)
const animate = ref(false)

const calculate = () => {
  if (principal.value && rate.value && months.value) {
    const monthlyRate = rate.value / 12 / 100
    const payment =
      (principal.value * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -months.value))
    result.value = parseFloat(payment.toFixed(2))
    animate.value = true
    setTimeout(() => (animate.value = false), 600)
  }
}
</script>
<template>
  <div class="calculator-card gradient-green">
    <h2>{{ t("calculators.loan.title") }}</h2>
    <p>{{ t("calculators.loan.description") }}</p>

    <div class="inputs">
      <input
        type="number"
        v-model.number="principal"
        :placeholder="t('calculators.loan.principal')"
      />
      <input
        type="number"
        v-model.number="rate"
        :placeholder="t('calculators.loan.rate')"
      />
      <input
        type="number"
        v-model.number="months"
        :placeholder="t('calculators.loan.months')"
      />
    </div>

    <button @click="calculate">
      {{ t("calculators.loan.calculate") }}
    </button>

    <div v-if="result !== null" class="result" :class="{ animate: animate }">
      {{ t("calculators.loan.result") }}:
      <span>{{ result }}</span>
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
    color: #11998e;
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

.gradient-green {
  background: linear-gradient(135deg, #11998e, #38ef7d);
}
</style>
