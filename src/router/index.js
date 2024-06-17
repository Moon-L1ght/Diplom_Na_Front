import { createRouter, createWebHistory } from 'vue-router';
import Mainpage from "@/components/Pages/Mainpage.vue";
import Catalog from "@/components/Pages/Catalog.vue";
import Category from "@/components/Pages/Category.vue"
import About from "@/components/Pages/About.vue";
import Services from "@/components/Pages/Services.vue";
import Cart from "@/components/Pages/Cart.vue";
import Product from "@/components/Pages/Product.vue";
import Order from "@/components/Pages/Order.vue";
import Profile from "@/components/Pages/Profile.vue";

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
        },
        {
            path: '/product',
            component: Product,
        },
        {
            path: '/order',
            component: Order,
        },
        {
            path: '/profile',
            component: Profile,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top :0 }
    }
})

export default router;