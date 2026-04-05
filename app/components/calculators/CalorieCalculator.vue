<script setup lang="ts">
const { t } = useI18n()

const weight = ref<number | null>(null)
const height = ref<number | null>(null)
const age = ref<number | null>(null)
const gender = ref<string>("male")
const activity = ref<number>(1.2)
const calories = ref<number | null>(null)

const calculateCalories = () => {
  if (weight.value && height.value && age.value) {
    let bmr = 0
    if (gender.value === "male") {
      bmr = 10 * weight.value + 6.25 * height.value - 5 * age.value + 5
    } else {
      bmr = 10 * weight.value + 6.25 * height.value - 5 * age.value - 161
    }
    calories.value = Math.round(bmr * activity.value)
  }
}
const caloriePlan = computed(() => {
  if (!calories.value) return null

  return {
    lose: Math.round(calories.value * 0.8), // -20%
    maintain: calories.value, // як є
    gain: Math.round(calories.value * 1.15), // +15%
  }
})
</script>

<template>
  <div class="calculator-card gradient-green">
    <h2>{{ t("calculators.calories.title") }}</h2>
    <p>{{ t("calculators.calories.description") }}</p>

    <input
      type="number"
      v-model.number="weight"
      :placeholder="t('calculators.calories.weight')"
    />
    <input
      type="number"
      v-model.number="height"
      :placeholder="t('calculators.calories.height')"
    />
    <input
      type="number"
      v-model.number="age"
      :placeholder="t('calculators.calories.age')"
    />
    <select v-model="gender">
      <option value="male">
        {{ t("calculators.calories.male") }}
      </option>
      <option value="female">
        {{ t("calculators.calories.female") }}
      </option>
    </select>
    <select v-model="activity">
      <option value="1.2">
        {{ t("calculators.calories.activitySedentary") }}
      </option>
      <option value="1.375">
        {{ t("calculators.calories.activityLight") }}
      </option>
      <option value="1.55">
        {{ t("calculators.calories.activityModerate") }}
      </option>
      <option value="1.725">
        {{ t("calculators.calories.activityVery") }}
      </option>
      <option value="1.9">
        {{ t("calculators.calories.activityExtra") }}
      </option>
    </select>

    <button @click="calculateCalories">
      {{ t("calculators.calories.calculate") }}
    </button>

    <div v-if="calories !== null" class="result animate">
      {{ t("calculators.calories.result") }}:
      <span>{{ calories }}</span>
    </div>
    <div v-if="caloriePlan" class="plan animate">
      <div class="plan-item lose">
        🔻 {{ t("calculators.calories.lose") }}:
        <span>{{ caloriePlan.lose }}</span>
      </div>

      <div class="plan-item maintain">
        ⚖️ {{ t("calculators.calories.maintain") }}:
        <span>{{ caloriePlan.maintain }}</span>
      </div>

      <div class="plan-item gain">
        🔺 {{ t("calculators.calories.gain") }}:
        <span>{{ caloriePlan.gain }}</span>
      </div>
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

  input,
  select {
    padding: 0.6rem;
    border-radius: 12px;
    border: none;
    width: 100%;
    margin-bottom: 1rem;

    option {
      background: #11998e;
    }
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

  .plan {
    margin-top: 1rem;
    display: grid;
    gap: 0.5rem;

    .plan-item {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0.8rem;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.15);

      span {
        font-weight: 700;
      }

      &.lose span {
        color: #ff5252;
      }

      &.maintain span {
        color: #fff;
      }

      &.gain span {
        color: #ffd740;
      }
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
