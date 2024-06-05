import { createRouter, createWebHistory } from 'vue-router';
import Mainpage from "@/components/Pages/Mainpage.vue";
import Catalog from "@/components/Pages/Catalog.vue";
import Category from "@/components/Pages/Category.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Mainpage,
        },
        {
            path: '/catalog',
            component: Catalog,
        },
        {
            path: '/category',
            component: Category,
        },

    ],
})

export default router;