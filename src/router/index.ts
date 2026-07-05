import { createRouter, createWebHistory } from 'vue-router'

import 'aos/dist/aos.css'
import AOS from 'aos'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((_, __, next) => {
  AOS.init({
    once: true,
    duration: 800,
    offset: 80,
    easing: 'ease-out-cubic'
  })
  next()
})

router.afterEach(() => {
  requestAnimationFrame(() => AOS.refresh())
})

export default router
