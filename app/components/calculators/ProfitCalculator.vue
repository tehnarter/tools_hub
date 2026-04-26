<script setup lang="ts">
const { t } = useI18n()

const revenue = ref<number | null>(null)
const cost = ref<number | null>(null)
const profit = ref<number | null>(null)

const calculateProfit = () => {
  if (revenue.value !== null && cost.value !== null) {
    profit.value = parseFloat((revenue.value - cost.value).toFixed(2))
  }
}
</script>

<template>
  <div class="calculator-card gradient-red">
    <h2>{{ t("calculators.profit.title") }}</h2>
    <p>{{ t("calculators.profit.description") }}</p>

    <input
      type="number"
      v-model.number="revenue"
      :placeholder="t('calculators.profit.revenue')"
    />
    <input
      type="number"
      v-model.number="cost"
      :placeholder="t('calculators.profit.cost')"
    />

    <button @click="calculateProfit">
      {{ t("calculators.profit.calculate") }}
    </button>

    <div v-if="profit !== null" class="result animate">
      {{ t("calculators.profit.result") }}:
      <span>{{ profit }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-card {
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
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
    color: #ff4b2b;
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
