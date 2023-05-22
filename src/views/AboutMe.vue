<template>
  <div style="border: 1px solid red; margin: 10px;">
    <h2>子组件标题：{{ title }}</h2>
    <div>
      <button @click="getTitle" >点击获取标题</button>
      <button @click="sendMsg">向父组件传值</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onUnmounted } from 'vue'
// 父子组件传值
const props = defineProps({
  title: {
    type: String,
    default: '默认标题'
  }
})

// 子组件向父组件传值
const emit = defineEmits(["sendMsg"])
const sendMsg = ()=>{
  emit("sendMsg", "参数1", "参数2")
}

// 点击获取标题
const getTitle = ()=>{
  console.log("得到的标题是:", props.title);
  
}

// 组件销毁之前
onBeforeUnmount(() => {
  console.log('组件销毁之前')
})

// 组件销毁之后
onUnmounted(() => {
  console.log('组件销毁之后')
})



defineExpose({
  getTitle,
  name:"子组件暴露的属性"
})
</script>

<style scoped></style>
