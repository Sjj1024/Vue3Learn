<template>
  <div v-for="(item, index) in treeData" :key="index" class="treeBox">
    <input type="checkbox" :checked="item.check"><span>{{ item.name }}</span>
    <MyTree v-if="item.children?.length" :tree-data="item.children"></MyTree>
  </div>
</template>

<script setup lang="ts">
interface tree {
  name: string
  check: boolean
  children?: tree[]
}

// 定义普通类型
// defineProps({
//   treeData: {
//     type: Array,
//     default: ()=> [{
//       name:"1-1",
//       check: true,
//       children:[]
//     }]
//   }
// })

// 定义带类型的
defineProps<{
  treeData: tree[]
}>()
</script>

<style scoped>
.treeBox{
  margin-left: 20px;
}
</style>
