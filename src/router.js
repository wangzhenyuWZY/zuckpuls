import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./view/home.vue')
        },
        {
            path: '/ido',
            name: 'ido',
            component: () => import('./view/ido.vue')
        },
        {
            path: '/set',
            name: 'set',
            component: () => import('./view/setting.vue')
        }
    ]
})

export default router
