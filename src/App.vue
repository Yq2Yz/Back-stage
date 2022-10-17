<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由配置到的组件将渲染到这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
// 清除默认样式
html,
body,
h3,
p {
  margin: 0;
  padding: 0
}
</style>
