<template>
  <div class="page">
    <!-- <div>menu</div> -->
    <PlayingField />
  </div>
</template>

<script setup lang="ts">
import PlayingField from 'src/components/PlayingField.vue'
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  // height: 100vh;
}
</style>
