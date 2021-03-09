import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import toy from '../views/toy.vue'
import toyEdit from '../views/toy-edit.vue'
import toyDetails from '../views/toy-details.vue'

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
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/about.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router