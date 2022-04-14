import {createRouter, createWebHistory} from "vue-router";

const homeHub = () => import('./components/page-wrap/home/HomeHub.vue')
const rulePage = () => import('./components/page-wrap/rules/RulePage.vue')
const blogPage = () => import('./components/page-wrap/blog/BlogPage.vue')
const postPage = () => import('./components/page-wrap/post/PostPage.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'blog',
            path: '/blog',
            component: blogPage
        },
        {
            name: 'post',
            path: '/blog/:postId',
            component: postPage
        },
        {
            name: 'rule',
            path: '/rule',
            component: rulePage
        },
        {
            name: 'home',
            path: '/',
            component: homeHub
        }
    ]
})

export {router}