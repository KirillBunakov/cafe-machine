import { createRouter, createWebHistory } from 'vue-router'
import CafeView from '../views/CafeView.vue'
import Payings from '@/views/Payings.vue'
import Cooking from '@/views/Cooking.vue'
import Success from '@/views/Success.vue'
import PromoView from '../views/PromoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cafe',
      name: 'home',
      component: CafeView
    },
    {
      path: '/payings',
      name: 'payings',
      component: Payings
    },
    {
      path: '/cooking',
      name: 'cooking',
      component: Cooking
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/',
      name: 'about',
      component: PromoView
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
