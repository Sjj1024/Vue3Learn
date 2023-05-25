<template>
  <div v-if="loading" class="loading">Loading</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const show = () => {
  loading.value = true
  console.log('show方法执行了')
}

const hide = () => {
  loading.value = false
  console.log('hide方法执行了')
}

defineExpose({
  show,
  hide
})
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  background-color: grey;
  color: white;
  z-index: 999;
}
</style>
