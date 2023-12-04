import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Transport from '../src/components/views/Transport.vue'
import Partners from '../src/components/views/Partners.vue'
import AboutB2B from '../src/components/views/AboutB2B.vue'
import Contact from '../src/components/views/Contact.vue'
import Tours from '../src/components/views/Tours.vue'

const routes = [
  {
    path: '/',
    component: Transport
  },
  {
    path: '/aboutb2b',
    component: AboutB2B
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/tours',
    component: Tours
  },
  {
    path: '/partners',
    component: Partners
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
