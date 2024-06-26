import { createRouter, createWebHistory } from 'vue-router';
import Mainpage from "@/components/Pages/Mainpage.vue";
import Catalog from "@/components/Pages/Catalog.vue";
import Category from "@/components/Pages/Category.vue"
import About from "@/components/Pages/About.vue";
import Services from "@/components/Pages/Services.vue";
import Cart from "@/components/Pages/Cart.vue";

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
        {
            path: '/about',
            component: About,
        },
        {
            path: '/services',
            component: Services,
        },
        {
            path: '/cart',
            component: Cart,
        }
    ],
})

export default router;