<template>
  <div class="page">
    <div class="grid grid-cols-3 gap-4 w-full place-items-center">
      <duv>Vadim</duv>
      <Logo :size="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from 'src/components/Logo.vue'

</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  height: 100vh;
  padding: 24px 12px;
}
</style>
