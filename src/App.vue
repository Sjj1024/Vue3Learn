<template>
  <div class="box">
    <div>
      你好，世界
      <button @click="switchColor">切换字体颜色</button>
      <button @click="switchBorder">切换边框颜色</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// 动态样式
const style = ref('red')

const switchColor = () => {
  style.value = 'orange'
}

const border = reactive({
  border: '2px solid black'
})

const switchBorder = () => {
  border.border = '5px solid red'
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  color: v-bind(style);
  border: v-bind('border.border');
  padding: 10px;
}
</style>
