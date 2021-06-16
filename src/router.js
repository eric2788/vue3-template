import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes:  [
        { path: '/', component: () => import('./view/Home.vue') },
        { path: '/about', component: () => import('./view/About.vue') }
    ]
})