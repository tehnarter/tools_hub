<script setup lang="ts">
const { t } = useI18n()

const price = ref<number | null>(null)
const discount = ref<number | null>(null)
const finalPrice = ref<number | null>(null)

const calculateDiscount = () => {
  if (price.value !== null && discount.value !== null) {
    finalPrice.value = parseFloat(
      (price.value * (1 - discount.value / 100)).toFixed(2)
    )
  }
}
</script>

<template>
  <div class="calculator-card gradient-yellow">
    <h2>{{ t("calculators.discount.title") }}</h2>
    <p>{{ t("calculators.discount.description") }}</p>

    <input
      type="number"
      v-model.number="price"
      :placeholder="t('calculators.discount.price')"
    />
    <input
      type="number"
      v-model.number="discount"
      :placeholder="t('calculators.discount.discount')"
    />

    <button @click="calculateDiscount">
      {{ t("calculators.discount.calculate") }}
    </button>

    <div v-if="finalPrice !== null" class="result animate">
      {{ t("calculators.discount.result") }}:
      <span>{{ finalPrice }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-card {
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(135deg, #fddb92, #d1fdff);
  color: #333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  input {
    padding: 0.6rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.6rem 1.2rem;
    border-radius: 12px;
    background: #333;
    color: #fff;
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
      color: #2575fc;
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
