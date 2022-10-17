import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store'
import './api/mock'
// 导入Cookie
import Cookie from 'js-cookie'

Vue.config.productionTip = false

// 全局引入ElementUI
Vue.use(ElementUI);

// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
    // 判断token存不存在
    const token = Cookie.get('token')
        // token不存在,说明当前用户是未登录,应该跳转至登录页login
    if (!token && to.name !== 'login') { // 且当前路由不是登录页
        next({ name: 'login' })
    } else if (token && to.name === 'login') { // token存在,说明用户登录,此时跳转至首页home
        next({ name: 'home' })
    } else {
        next()
    }
})

new Vue({
    // 挂载路由router
    router,
    store,
    render: h => h(App),
    created() {
        store.commit('addMenu', router)
    }
}).$mount('#app')