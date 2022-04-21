import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/login',
    component:()=>import('@/views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  token ? next() : to.path == '/login' ? next() : next('/login')
})

export default router
