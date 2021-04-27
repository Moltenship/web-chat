import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'

const routes = [
  {
    path: '/', 
    component: Home,
    meta: {
      requiresUsername: true,
    },
  },
  {
    path: '/auth',
    component: Auth,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresUsername) && !store.getters.username) {
    next('/auth')
  } else {
    next()
  }
})

export default router
