<script setup lang="ts">
const { t } = useI18n()

const gain = ref<number | null>(null)
const cost = ref<number | null>(null)
const roi = ref<number | null>(null)

const calculateROI = () => {
  if (gain.value !== null && cost.value !== null && cost.value !== 0) {
    roi.value = parseFloat(
      (((gain.value - cost.value) / cost.value) * 100).toFixed(2)
    )
  }
}
</script>

<template>
  <div class="calculator-card gradient-teal">
    <h2>{{ t("calculators.roi.title") }}</h2>
    <p>{{ t("calculators.roi.description") }}</p>

    <input
      type="number"
      v-model.number="gain"
      :placeholder="t('calculators.roi.gain')"
    />
    <input
      type="number"
      v-model.number="cost"
      :placeholder="t('calculators.roi.cost')"
    />

    <button @click="calculateROI">
      {{ t("calculators.roi.calculate") }}
    </button>

    <div v-if="roi !== null" class="result animate">
      {{ t("calculators.roi.result") }}:
      <span>{{ roi }}%</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-card {
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(135deg, #11998e, #38ef7d);
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
    color: #11998e;
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
