import Vue from 'vue'
import Vuex from 'vuex'
import toyStore from './toy.store.js'
import { toyService } from '../services/toy.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        toyStore
    }
})