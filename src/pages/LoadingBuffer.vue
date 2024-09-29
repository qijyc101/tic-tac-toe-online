<template>
  <div class="page">
    <Logo
      class="pulsate"
      :size="140"
      animate
    />

    <div class="developer-info">
      <code>dev by qijyc101</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from 'src/components/Logo.vue'
</script>

<style scoped lang="scss">
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pulsate {
  animation: pulsate 2.5s ease-in-out infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.developer-info {
  position: absolute;
  bottom: 3vh;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.8rem;
  color: #6b7577;
}
</style>
