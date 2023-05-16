<template>
<div>
这是关于页面的内容
</div>
</template>

<script setup lang='ts'>
import {onBeforeUnmount, onUnmounted } from 'vue'
// 组件销毁之前
onBeforeUnmount(() => {
  console.log("组件销毁之前");
})

// 组件销毁之后
onUnmounted(() => {
  console.log("组件销毁之后");
})
</script>

<style scoped>

</style>