import { toyService } from '../services/toy.service.js'

export default ({
    strict: true,
    state: {
        toys: [],
        filterBy: {
            sort: null,
            filter: null,
            search: null
        }
    },
    getters: {
        getToysTypes(state) {
            var types = [];
            state.toys.forEach(({ type }) => {
                if (!types.includes(type)) types.push(type)
            })
            return types;
        },
        getToysPrices(state) {
            var prices = [];
            state.toys.forEach(({ price }) => {
                if (!prices.includes(price)) prices.push(price)
            })
            return prices;
        },
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys;
        },
        addToy(state, { toy }) {
            state.toys.unshift(toy);
        },
        updateToy(state, { toy }) {
            const idx = state.toys.findIndex(p => p._id === toy._id)
            state.toys.splice(idx, 1, toy);
        },
        removeToy(state, { id }) {
            const idx = state.toys.findIndex(t => t._id === id)
            state.toys.splice(idx, 1)
        },
        setFilter(state, { filter }) {
            state.filterBy = filter
        },
    },
    actions: {
        loadToys({ commit }, state) {
            toyService.query(state.sort)
                .then(toys => {
                    commit({ type: 'setToys', toys })
                })
                .catch(err => console.log('Error', err))
        },
        saveToy({ commit }, { toy }) {
            const type = (toy._id) ? 'updateToy' : 'addToy';
            return toyService.save(toy)
                .then(savedToy => commit({ type, toy: savedToy }))
                .catch(err => console.log('Store: Cannot save toy', err))
        },
        removeToy({ commit }, payload) {
            return toyService.remove(payload.id)
                .then(() => { commit(payload) })
                .catch(err => console.log('Store: Cannot remove toy', err))
        },
        setFilter({ commit }, { filter }) {
            toyService.query(filter)
                .then(toys => {
                    commit({ type: 'setToys', toys })
                })
        },
    },
    modules: {}
})