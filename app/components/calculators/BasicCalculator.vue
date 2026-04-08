<script setup lang="ts">
const display = ref<string>("0")

const append = (value: string) => {
  if (display.value === "0" && value !== ".") {
    display.value = value
  } else {
    display.value += value
  }
}

// AC — повністю
const clearAll = () => {
  display.value = "0"
}

// ⌫ — backspace
const backspace = () => {
  if (display.value.length <= 1) {
    display.value = "0"
  } else {
    display.value = display.value.slice(0, -1)
  }
}

// C — як у Casio (очищає тільки останнє число)
const clearEntry = () => {
  const updated = display.value.replace(/(\d+\.?\d*)$/, "")
  display.value = updated === "" ? "0" : updated
}

// +/-
const toggleSign = () => {
  const match = display.value.match(/(-?\d+\.?\d*)$/)
  if (match) {
    const num = match[0]
    const toggled = num.startsWith("-") ? num.slice(1) : "-" + num
    display.value = display.value.slice(0, -num.length) + toggled
  }
}

// %
const percent = () => {
  const match = display.value.match(/(\d+\.?\d*)$/)
  if (match) {
    const num = match[0]
    const result = (Number(num) / 100).toString()
    display.value = display.value.slice(0, -num.length) + result
  }
}

const calculate = () => {
  try {
    let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/")

    if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
      display.value = "Error"
      return
    }

    const result = eval(expression)
    display.value = Number.isFinite(result) ? result.toString() : "Error"
  } catch {
    display.value = "Error"
  }
}
</script>

<template>
  <div class="calculator-card gradient-blue">
    <div class="display">
      {{ display }}
    </div>

    <div class="buttons">
      <button @click="clearAll">AC</button>
      <button @click="clearEntry">C</button>
      <button @click="backspace">⌫</button>
      <button @click="append('÷')">÷</button>
      <button @click="percent">%</button>
      <button @click="append('(')">(</button>
      <button @click="append(')')">)</button>
      <button @click="append('×')">×</button>
      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('-')">−</button>
      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('+')">+</button>
      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('0')">0</button>
      <button @click="toggleSign">+/-</button>
      <button @click="append('.')">.</button>
      <button class="equal" @click="calculate">=</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-card {
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: #0c0c0c;

  .display {
    background: #ebe3e3f2;
    padding: 1rem;
    border-radius: 12px;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: right;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 60px;
    gap: 0.5rem;

    button {
      border: none;
      border-radius: 12px;
      background: var(--themes-card-bg-col);
      font-weight: 600;
      cursor: pointer;
      transition: background-color 3s ease;
      &:hover {
        background: rgba(255, 255, 255, 0.35);
      }
    }

    .equal {
      grid-column: 4;
      grid-row: 5 / span 2;
      background: #ccccca;
    }
  }
}
</style>
