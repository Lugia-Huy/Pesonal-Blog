import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Gallery from '@/components/Gallery.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: Error,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
