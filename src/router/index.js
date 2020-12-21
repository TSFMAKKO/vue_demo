import Vue from 'vue'
import VueRouter from 'vue-router'
// 以上是官方的元件

import home from "../components/home.vue"
import aboutme from "../components/aboutme.vue"
// 


Vue.use(VueRouter);
// 啟用

// 本文件需要匯出給Entry:main.js使用
export default new VueRouter({
    routes: [
        {
            name: '首頁',
            path: '/',
            component: home
        },
        {
            name: '關於我們',
            path: '/about',
            component: aboutme
        },
    ]
});