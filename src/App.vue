<template>
  <div>1024小神-Vue3的图片懒加载技术</div>
  <div v-for="(item, index) in imageList" :key="index">
    <img v-lazy="item" alt="" class="imgBox" />
  </div>
</template>

<script setup lang="ts">
// 先引入所有的图片列表，然后遍历，然后通过指令判断图片是否在可视区域
const imageList: string[] = [
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10010.4i2i1hvz85k0.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10009.4lcurxno0u80.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10008.20j3282i5a80.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10007.4yjxz1nlxv40.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10006.1hqxktkp0740.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10005.5dugex2oiok0.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10004.4slzbxgtwx60.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10003.7jcflu2gbfw0.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10002.5w4sb11qh440.webp',
  'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/10001.4cqsi3d7q9e0.webp'
]

// 加载动图
const loading: string = 'https://cdn.staticaly.com/gh/1024huijia/QingChunMeizi@master/loading.5e3wpezjapc0.gif'

const vLazy = (el: HTMLImageElement, bind: any) => {
  console.log('el---bind---:', el, bind)
  el.src = loading
  // 使用obaesrve监听图片是否在可视区域内
  const observe = new IntersectionObserver((entry) => {
    console.log(entry[0], bind.value)
    // 判断元素是否在可视区域内: >0 表示在可视区域内
    if (entry[0].intersectionRatio > 0) {
      setTimeout(()=>{
        el.src = bind.value
      }, 1000)
    }
  })
  observe.observe(el)
}
</script>

<style scoped>
.imgBox {
  width: 700px;
  height: 500px;
  margin: 10px;
}
</style>
