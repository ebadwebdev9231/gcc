import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Integration from '../views/Integration.vue'
import ContactPage from '@/views/ContactPage.vue'
import Pricing from '@/views/Pricing.vue'
import DealershipProfile from "@/views/DealershipProfile.vue"
import NotFound from "@/views/NotFound.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/integrations', name: 'Integration', component: Integration },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/pricing', name: 'Pricing', component: Pricing },

  // Dealership route
  { path: '/:slug', name: 'DealershipProfile', component: DealershipProfile, props: true },

  // Catch all (must be LAST)
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
