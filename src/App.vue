<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="title"/> -->
    <!-- <home></home> -->
    <!-- <aboutme></aboutme> -->

      <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import home from './components/home.vue'
// import aboutme from './components/aboutme.vue'

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // home,
    // aboutme
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
