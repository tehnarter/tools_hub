<script setup lang="ts">
import { ref } from "vue"

const display = ref("0")
const mode = ref<"DEG" | "RAD">("DEG")
const memory = ref(0)

// append value
const append = (val: string) => {
  if (display.value === "0" && val !== ".") display.value = val
  else display.value += val
}

// clear
const clearAll = () => (display.value = "0")
const backspace = () => {
  display.value = display.value.length <= 1 ? "0" : display.value.slice(0, -1)
}

// toggle DEG/RAD
const toggleMode = () => (mode.value = mode.value === "DEG" ? "RAD" : "DEG")

// factorial
const factorial = (n: number) => {
  if (n < 0 || !Number.isInteger(n)) return NaN
  return n === 0
    ? 1
    : Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b, 1)
}
// зміна знаку
const toggleSign = () => {
  const match = display.value.match(/(-?\d+\.?\d*)$/)
  if (match) {
    const num = match[0]
    const toggled = num.startsWith("-") ? num.slice(1) : "-" + num
    display.value = display.value.slice(0, -num.length) + toggled
  }
}

// відсотки
const percent = () => {
  try {
    const val = parseFloat(display.value)
    if (!isNaN(val)) display.value = (val / 100).toString()
  } catch {
    display.value = "Error"
  }
}

// memory functions
const memoryAdd = () => {
  const val = parseFloat(display.value)
  if (!isNaN(val)) memory.value += val
}
const memorySub = () => {
  const val = parseFloat(display.value)
  if (!isNaN(val)) memory.value -= val
}
const memoryRecall = () => (display.value = memory.value.toString())
const memoryClear = () => (memory.value = 0)

// insert functions
const insertFunc = (fn: string) => append(fn + "(")

// calculate
const calculate = () => {
  try {
    let exp = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/π/g, "pi")
      .replace(/√/g, "sqrt")
      .replace(/(\d+)!/g, "fact($1)")
      .replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)")

    const toRad = (x: number) =>
      mode.value === "DEG" ? (x * Math.PI) / 180 : x

    const scope = {
      sin: (x: number) => Math.sin(toRad(x)),
      cos: (x: number) => Math.cos(toRad(x)),
      tan: (x: number) => Math.tan(toRad(x)),
      asin: (x: number) =>
        mode.value === "DEG" ? (Math.asin(x) * 180) / Math.PI : Math.asin(x),
      acos: (x: number) =>
        mode.value === "DEG" ? (Math.acos(x) * 180) / Math.PI : Math.acos(x),
      atan: (x: number) =>
        mode.value === "DEG" ? (Math.atan(x) * 180) / Math.PI : Math.atan(x),
      log: (x: number) => Math.log10(x),
      ln: (x: number) => Math.log(x),
      sqrt: (x: number) => Math.sqrt(x),
      abs: (x: number) => Math.abs(x),
      exp: (x: number) => Math.exp(x),
      fact: factorial,
      pi: Math.PI,
      e: Math.E,
    }

    const result = Function("scope", `with(scope){ return ${exp} }`)(scope)
    display.value = Number.isFinite(result) ? result.toString() : "Error"
  } catch {
    display.value = "Error"
  }
}
</script>

<template>
  <div class="calculator-card">
    <div class="top-bar">
      <span>{{ mode }}</span>
    </div>

    <div class="display">{{ display }}</div>

    <div class="buttons">
      <!-- Memory + Mode -->
      <button class="wide" @click="toggleMode">DEG/RAD</button>
      <button @click="memoryClear">MC</button>
      <button @click="memoryRecall">MR</button>
      <button @click="memoryAdd">M+</button>
      <button @click="memorySub">M-</button>

      <!-- Constants & factorial -->
      <button @click="append('π')">π</button>
      <button @click="append('e')">e</button>
      <button @click="append('!')">!</button>
      <button @click="append('^')">^</button>
      <button @click="append('(')">(</button>
      <button @click="append(')')">)</button>

      <!-- Functions -->
      <button @click="insertFunc('sin')">sin</button>
      <button @click="insertFunc('cos')">cos</button>
      <button @click="insertFunc('tan')">tan</button>
      <button @click="insertFunc('asin')">asin</button>
      <button @click="insertFunc('acos')">acos</button>
      <button @click="insertFunc('atan')">atan</button>
      <button @click="insertFunc('log')">log</button>
      <button @click="insertFunc('ln')">ln</button>
      <button @click="clearAll">AC</button>
      <button @click="backspace">⌫</button>
      <button @click="insertFunc('exp')">exp</button>
      <button @click="insertFunc('abs')">abs</button>
      <button @click="append('×')">×</button>

      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>

      <button @click="append('9')">9</button>
      <button @click="append('÷')">÷</button>
      <button @click="append('-')">−</button>

      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>

      <button @click="percent">%</button>

      <button @click="append('+')">+</button>
      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('√(')">√</button>
      <button class="wide" @click="append('0')">0</button>
      <button @click="toggleSign">+/-</button>
      <button @click="append('.')">.</button>

      <button class="equal" @click="calculate">=</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calculator-card {
  padding: 1rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #7f00ff, #e100ff);
  color: #fff;
  max-width: 400px;
  margin: auto;

  .top-bar {
    display: flex;
    justify-content: flex-end;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    opacity: 0.8;
  }

  .display {
    padding: 1rem;
    background: #ebe3e3f2;
    color: #000;
    border-radius: 12px;
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    text-align: right;
    word-break: break-all;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 55px;
    gap: 0.4rem;

    button {
      border-radius: 8px;
      border: none;
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
      font-weight: 600;
      font-size: 1rem;
      transition: background 0.2s;
      &:hover {
        background: rgba(255, 255, 255, 0.35);
      }
    }
    .plus {
      grid-row: span 2;
    }
    .wide {
      grid-column: span 2;
    }

    .equal {
      grid-column: 5;
      grid-row: 8 / span 2;
      background: #ed5abd;

      font-weight: bold;
      font-size: 1.2rem;
    }
  }
}

/* адаптивність */
@media (max-width: 480px) {
  .calculator-card {
    .display {
      font-size: 1.5rem;
    }
    .buttons {
      grid-auto-rows: 50px;
      button {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
