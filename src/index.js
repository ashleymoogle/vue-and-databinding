import Vue from 'vue'
//import router from './router'
import './component/globals'

import VueRouter from 'vue-router'
import home from './router/views/home.vue'
import pics from './router/views/pics.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/pics',
        component: pics
    },
    {
        path: '/404',
        component: require('./router/views/404.vue').default,
        props: true,
    },
    {
        path: '*',
        redirect: '404',
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})
console.log(router)

import App from './App.vue'

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
