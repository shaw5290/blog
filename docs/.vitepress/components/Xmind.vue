<template>
  <div id="xmind-container"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
// import { XMindEmbedViewer } from '@aicoa/xmind-embed-viewer'
const props = defineProps({
  url: String,
})

onMounted(async () => {
  console.log('viewer-url', props?.url)
  const { XMindEmbedViewer } = await import('@aicoa/xmind-embed-viewer')
  const viewer = new XMindEmbedViewer({
    el: '#xmind-container', // HTMLElement | HTMLIFrameElement | string
    // 如果在中国大陆境内速度慢，可以添加的参数 `region: 'cn'` 改为使用 xmind.cn 的图库作为依赖。
    region: 'cn', //optinal, global(default) or cn
    styles: { height: '100%', width: '100%' },
    //默认引用网站根目录
    // domain: 'http://localhost:5173',
  })
  // viewer.setStyles({
  //   width: '100%',
  //   height: '100%',
  // })
  const callback = () => {
    viewer.removeEventListener('map-ready', callback)
  }
  viewer.addEventListener('map-ready', callback)
  fetch(props?.url)
    .then((res) => res.arrayBuffer())
    .then((file) => {
      viewer.load(file)
    })
    .catch((err) => {
      console.err('加载xmind文件出错！')
      viewer.removeEventListener('map-ready', callback)
    })
})
</script>
<style>
#xmind-container {
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: center;
}
</style>
