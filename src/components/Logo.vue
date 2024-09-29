<template>
  <div class="logo">
    <div class="tic-tac-toe">
      <div
        v-for="(cell, index) in flatBoard"
        :key="index"
        class="cell"
      >
        <transition name="cell-appear">
          <span v-if="cell">{{ cell }}</span>
        </transition>
      </div>
      <div
        class="strike-line"
        :class="{ 'strike-animate': showStrike }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

type TProps = {
  size: number
  animate?: boolean
}

const props = withDefaults(defineProps<TProps>(), {
  animate: false,
  size: 150,
})

const logoSize = computed(() => props.size + 'px')
const paddingAndBorder = computed(() => (props.size / 100) * 6 + 'px')
const cellSize = computed(() => (props.size - (parseFloat(paddingAndBorder.value) * 2 + 8)) / 3)
const fontSize = computed(() => cellSize.value / 2 + 'px')
const lineInset = computed(() => cellSize.value / 2 - 1 + 'px')
const fontWeight = computed(() => (props.size < 100 ? 'normal' : 'bold'))

const getBoard = (fill?: boolean) =>
  fill
    ? [
        ['t', 'i', 'c'],
        ['t', 'a', 'c'],
        ['t', 'o', 'e'],
      ]
    : [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]

const board = ref(getBoard(!props.animate))

const letters = getBoard(true).flat()
const order = [0, 5, 2, 3, 1, 8, 4, 7, 6]

const flatBoard = computed(() => board.value.flat())

const showStrike = ref(false)

const animateLogo = () => {
  showStrike.value = false
  order.forEach((index, step) => {
    setTimeout(() => {
      const row = Math.floor(index / 3)
      const col = index % 3
      board.value[row][col] = letters[index]

      if (step === order.length - 1) {
        setTimeout(() => {
          showStrike.value = true
          setTimeout(() => {
            showStrike.value = false
            board.value = getBoard()
            animateLogo()
          }, 2500)
        }, 500)
      }
    }, step * 200)
  })
}

onMounted(() => {
  if (props.animate) {
    animateLogo()
  }
})
</script>

<style scoped lang="scss">
.logo {
  background-color: #2c3e50;
  border-radius: v-bind(paddingAndBorder);
  padding: v-bind(paddingAndBorder);
  width: v-bind(logoSize);
}

.tic-tac-toe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  border: 2px solid #34495e;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.cell {
  aspect-ratio: 1 / 1;
  border: 2px solid #34495e;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  span {
    font-size: v-bind(fontSize);
    font-weight: v-bind(fontWeight);
    color: #ecf0f1;
  }
}

.cell:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.cell-appear-enter-active,
.cell-appear-leave-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cell-appear-enter-from,
.cell-appear-leave-to {
  opacity: 0;
  transform: scale(0.5) rotate(180deg);
}

.strike-line {
  position: absolute;
  left: v-bind(lineInset);
  top: -6px;
  width: 4px;
  border-radius: 2px;
  height: 0;
  background-color: #e74c3c;
  opacity: 0.8;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.strike-animate {
  height: calc(100% + 12px);
  transform: scaleY(1);
}
</style>
