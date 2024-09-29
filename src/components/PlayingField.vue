<template>
  <div class="tic-tac-toe">
    <div
      v-for="(row, rowIndex) in 3"
      :key="rowIndex"
      class="row"
    >
      <div
        v-for="(col, colIndex) in 3"
        :key="colIndex"
        class="cell"
      >
        <i :class="['pi', board[rowIndex][colIndex]]"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const board = ref([
  ['pi-circle', 'pi-times', ''],
  ['pi-times', 'pi-circle', 'pi-times'],
  ['', 'pi-times', 'pi-circle'],
])
</script>

<style scoped>
.tic-tac-toe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.cell {
  aspect-ratio: 1 / 1;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15vw;
  cursor: pointer;
}

@media (min-width: 600px) {
  .cell {
    font-size: 90px;
  }
}
</style>
