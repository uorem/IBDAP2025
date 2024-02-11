import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login'

    },
    {
        path: '/login',
        name: "login",
        component: () => import('@/views/login/login.vue'),

    },
    {
        path: '/home',
        name: "home",
        component: () => import('@/views/index/home.vue'),
        redirect: '/default',
        children: [
            {
                path: '/default',
                component: () => import('@/views/index/components/defaultMain.vue'),
            },
            {
                path: '/uploadFile',
                name: 'uploadFile',
                component:() => import('@/views/index/components/uploadFile.vue')
            },
            {
                path: '/myFile',
                name: 'myFile',
                component:() => import('@/views/index/components/myFile.vue')
            }
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;
