import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../views/portfolio.vue')
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('../views/resume.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/contact.vue')
    }
  ]

const router = new VueRouter({
  routes
})

export default router
