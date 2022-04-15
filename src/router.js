import {createRouter, createWebHistory} from "vue-router";

const homePage = () => import('./components/page-wrap/home/HomePage.vue')
const rulePage = () => import('./components/page-wrap/rules/RulePage.vue')
const blogPage = () => import('./components/page-wrap/blog/BlogPage.vue')
const postPage = () => import('./components/page-wrap/post/PostPage.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: homePage
        },
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
        }
    ]
})

export {router}