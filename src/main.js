import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// import Axiox from "Axios";
// import router from "./router"

import about from "./components/aboutme.vue"



// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }


// Vue.prototype.$axios=Axiox;

// 安裝vue-router插件
Vue.use(VueRouter);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  // { path: '/foo', component: Foo },
  // { path: '/bar', component: Bar }
  { path: '/about', component: about },
  {
    path: '/about', components: {
      default: about
    }
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  // 
  linkActiveClass: 'active'
})

// 4. 创建和挂载
// import home from './components/home.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,

}).$mount('#app')
