import { createRouter, createWebHashHistory } from 'vue-router'
import Tasks from './views/Index.vue'

const router: any = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Tasks as any,
            meta: {
                title: '首页'
            }
        },
    ]
})

export default router
