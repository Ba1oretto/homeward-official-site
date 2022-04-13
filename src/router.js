import {createRouter, createWebHistory} from "vue-router";

const homeHub = () => import('./components/page-wrap/home/HomeHub.vue')
const rulesHub = () => import('./components/page-wrap/rules/RulesHub.vue')
const blogHub = () => import('./components/page-wrap/blog/BlogHub.vue')
const postHub = () => import('./components/page-wrap/post/PostHub.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'blog',
            path: '/blog',
            component: blogHub
        },
        {
            name: 'post',
            path: '/blog/:postId',
            component: postHub
        },
        {
            name: 'rules',
            path: '/rules',
            component: rulesHub
        },
        {
            name: 'home',
            path: '/',
            component: homeHub
        }
    ]
})

export {router}