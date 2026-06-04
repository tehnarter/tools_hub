<script setup lang="ts">
import { ref, computed } from "vue"
const { t } = useI18n()

const birthDate = ref<string | null>(null)
const age = ref<{
  years: number
  months: number
  days: number
} | null>(null)

// функція розрахунку
const calculateAge = () => {
  if (!birthDate.value) return
  const birth = new Date(birthDate.value)
  const now = new Date()

  let years = now.getFullYear() - birth.getFullYear()
  let months = now.getMonth() - birth.getMonth()
  let days = now.getDate() - birth.getDate()

  if (days < 0) {
    months--
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years--
    months += 12
  }

  age.value = { years, months, days }
}

// комп’ютоване поле для формування чистого рядка без нулів
const ageString = computed(() => {
  if (!age.value) return ""
  const parts = []
  if (age.value.years > 0)
    parts.push(`${age.value.years} ${t("calculators.age.resultYears")}`)
  if (age.value.months > 0)
    parts.push(`${age.value.months} ${t("calculators.age.resultMonths")}`)
  if (age.value.days > 0)
    parts.push(`${age.value.days} ${t("calculators.age.resultDays")}`)
  return parts.join(". ")
})
</script>

<template>
  <div class="calculator-card gradient-pink">
    <h2>{{ t("calculators.age.title") }}</h2>
    <p>{{ t("calculators.age.description") }}</p>

    <input
      type="date"
      v-model="birthDate"
      :placeholder="t('calculators.age.birthDate')"
    />

    <button @click="calculateAge">
      {{ t("calculators.age.calculate") }}
    </button>

    <div v-if="age !== null" class="result animate">
      {{ t("calculators.age.result") }}
      <span>{{ ageString }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-card {
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(135deg, #ff6a95, #ff4e7b);
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
    color: #ff4e7b;
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
      font-size: 1.2rem;
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
