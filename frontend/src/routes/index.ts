import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import EditPlayer from "../pages/EditPlayer.vue";

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
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        },
    ]
}) 