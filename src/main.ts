import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import loading from './plugin/loading'
import "./assets/tailwind.css"


const app = createApp(App)

app.use(createPinia())
app.use(router)
// 自定义插件全局loading
app.use(loading)

app.use(ElementPlus)
// 定义全局变量和全局函数
app.config.globalProperties.env = 'dev'

app.config.globalProperties.filter = {
  format<T>(content: T) {
    return '格式化后的内容' + content
  }
}

// 解决Vue中的全局变量和函数报错问题
interface Filter {
  format<T>(content: T): string
}

interface LOADING {
  show(): null
  hide(): null
}

type Load = {
  show(): null
  hide(): null
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    filter: Filter
    env: string
    LOADING: LOADING
  }
}

app.mount('#app')
