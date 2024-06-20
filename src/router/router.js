import {createRouter, createWebHistory} from "vue-router";

import Main from "../pages/Main.vue";
import Posts from "../pages/Posts.vue";
import About from "../pages/About.vue";
import PostId from "../pages/PostId.vue";
import PostsWithStore from "../pages/PostsWithStore.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostId
    },
    {
        path: '/store',
        component: PostsWithStore
    },
]
const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router