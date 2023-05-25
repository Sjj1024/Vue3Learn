import { onMounted } from 'vue'

export default function (ele: string) {
  onMounted(() => {
    console.log('ele-------', ele)
    const imageNode: HTMLImageElement = document.querySelector(ele) as HTMLImageElement
    console.log('image-------', imageNode.src)
  })
}
