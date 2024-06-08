import { createRouter, createWebHistory } from 'vue-router'

// AOS
import 'aos/dist/aos.css'
import AOS from 'aos'

// componants
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router
