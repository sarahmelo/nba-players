import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import EditPlayer from './pages/EditPlayer.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/edit-player/:id',
            name: 'edit-player',
            component: EditPlayer,
            props: true,
        },
    ]
}) 
const app = createApp(App);
app.use(router);
app.mount('#app');
