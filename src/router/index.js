import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Integration from '../views/Integration.vue'
import ContactPage from '@/views/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/integration', name: 'Integration', component: Integration },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
