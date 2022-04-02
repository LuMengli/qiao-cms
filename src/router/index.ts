import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/LoginIndex.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
