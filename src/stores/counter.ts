import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 定义响应式数据：ref() 就是 state 属性
  const count = ref(0)

  // 定义计算属性:computed就是计算属性getters
  const doubleCount = computed(() => count.value * 2)

  // 定义action函数：function() 就是 actions
  function increment() {
    count.value++
  }

  // 定义action：function() 就是 actions
  function lowDown() {
    count.value--
  }
  // 返回内容
  return { count, lowDown, doubleCount, increment }
})
