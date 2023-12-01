import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardViewVue from '@/views/Dashboard/DashboardView.vue'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'Dashboard | Index',
      component: DashboardViewVue,
    }
  ]
})

router.afterEach((to, from) => {
  nextTick(() => {
    document.title = to.name as string
  })
})

export default router
