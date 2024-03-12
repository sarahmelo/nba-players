import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Profile from './pages/Profile.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: Profile,
            props: true,
        },
    ]
}) 
const app = createApp(App);
app.use(router);
app.mount('#app');
