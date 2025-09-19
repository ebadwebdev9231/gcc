import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Integration from '../views/Integration.vue'
import ContactPage from '@/views/ContactPage.vue'
import Pricing from '@/views/Pricing.vue'

// New dealership routes
import DealershipList from "@/views/DealershipList.vue";
import DealershipProfile from "@/views/DealershipProfile.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/integrations', name: 'Integration', component: Integration },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/pricing', name: 'Pricing', component: Pricing },

  // New Dealership routes
  { path: "/dealerships", name: "DealershipList", component: DealershipList },
  { 
    path: "/dealership/:slug", 
    name: "DealershipProfile", 
    component: DealershipProfile, 
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
