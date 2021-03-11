import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';
import toy from '../views/toy.vue';
import about from '../views/about.vue';
import toyEdit from '../views/toy-edit.vue';
import toyDetails from '../views/toy-details.vue';
import dashboard from '../views/toy-dashboard.vue';
import admin from '../views/admin.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/toy',
        name: 'toys',
        component: toy
    },
    {
        path: '/edit',
        name: 'edit-toy',
        component: toyEdit
    },
    {
        path: '/edit/:toyId',
        name: 'edit-toy',
        component: toyEdit
    },
    {
        path: '/toy/:toyId',
        name: 'toy-details',
        component: toyDetails
    },
    {
        path: '/dashboard',
        name: 'chart',
        component: dashboard
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/admin',
        name: 'admin',
        component: admin
    },
]

const router = new VueRouter({
    routes
})

export default router