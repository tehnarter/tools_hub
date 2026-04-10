<script setup lang="ts">
const { t } = useI18n()

const date1 = ref<string | null>(null)
const date2 = ref<string | null>(null)
const difference = ref<number | null>(null)

const calculateDifference = () => {
  if (date1.value && date2.value) {
    const d1 = new Date(date1.value)
    const d2 = new Date(date2.value)
    const diffTime = Math.abs(d2.getTime() - d1.getTime())
    difference.value = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }
}
</script>

<template>
  <div class="calculator-card gradient-purple">
    <h2>{{ t("calculators.dateDiff.title") }}</h2>
    <p>{{ t("calculators.dateDiff.description") }}</p>

    <input type="date" v-model="date1" />
    <input type="date" v-model="date2" />

    <button @click="calculateDifference">
      {{ t("calculators.dateDiff.calculate") }}
    </button>

    <div v-if="difference !== null" class="result animate">
      {{ t("calculators.dateDiff.result") }}:
      <span>{{ difference }}</span>
      {{ t("calculators.dateDiff.days") }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-card {
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
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
    color: #2575fc;
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
