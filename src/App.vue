<template>
<div>
  <h2>Vue3的生命周期</h2>
  <div>
    <button @click="updateContent">点击更改组件内容</button>
    <button @click="show">创建和销毁组件</button>
    <div ref="demo">{{ content }}</div>
    <AboutMe v-if="display" ></AboutMe>
  </div>
</div>
</template>

<script setup lang='ts'>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
// import AboutMe from './views/AboutMe.vue'
import AboutMe from './views/AboutMe.vue'

console.log("setup语法糖模式中，可以直接在这里当做created函数使用");

const demo = ref<HTMLDivElement>()

const content = ref<string>("这是内容：div内容")

const display = ref<boolean>(true)

const updateContent = ()=>{
  content.value = "div组价内容更新"
}

const show = ()=>{
  display.value = !display.value
}

// 页面渲染之前
onBeforeMount(() => {
  console.log("渲染之前", demo);
})

// 页面渲染之后
onMounted(() => {
  console.log("渲染之后", demo);
})

// 组件更新之前
onBeforeUpdate(() => {
  console.log("组件更新之前", demo);
})

// 组件更新之后
onUpdated(() => {
  console.log("组件更新之后", demo);
})

</script>

<style scoped>

</style>