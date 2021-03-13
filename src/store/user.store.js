import { userService } from '../services/user.service.js'

export default ({
    strict: true,
    state: {
        users: [],
        loggedInUser: null,
        filterBy: {
            sort: null,
            filter: null,
            search: null
        }
    },
    mutations: {
        setUsers(state, { users }) {
            state.users = users;
        },
        addUser(state, { user }) {
            state.users.unshift(user);
        },
        updateUser(state, { user }) {
            const idx = state.users.findIndex(p => p._id === user._id)
            state.users.splice(idx, 1, user);
        },
        removeUser(state, { id }) {
            const idx = state.users.findIndex(t => t._id === id)
            state.users.splice(idx, 1)
        },
        setFilter(state, { filter }) {
            state.filterBy = filter
        },
        setUser(state, { user }) {
            state.loggedInUser = user
        },
        logout(state) {
            state.loggedInUser = null
        },
    },
    actions: {
        loadUsers({ commit }) {
            userService.query()
                .then(users => {
                    commit({ type: 'setUsers', users })
                })
                .catch(err => console.log('Error', err))
        },
        saveUser({ commit }, { user }) {
            const type = (user._id) ? 'updateUser' : 'addUser';
            return userService.save(user)
                .then(savedUser => commit({ type, user: savedUser }))
                .catch(err => console.log('Store: Cannot save user', err))
        },
        removeUser({ commit }, payload) {
            return userService.remove(payload.id)
                .then(() => { commit(payload) })
                .catch(err => console.log('Store: Cannot remove user', err))
        },
        setFilter({ commit }, { filter }) {
            userService.query(filter)
                .then(users => {
                    commit({ type: 'setUsers', users })
                })
        },
        login({ commit }, { user }) {
            return userService.login(user)
                .then((user) => {
                    commit({ type: 'setUser', user })
                    return user
                })
                .catch(err => console.log('Store: Cannot login user', err))
        },
        signup({ commit }, { user }) {
            return userService.signup(user)
                .then((user) => {
                    commit({ type: 'addUser', user })
                    return user;
                })
        },
        logout({ commit }) {
            return userService.logout()
                .then(() => {
                    commit({ type: 'logout' })
                })
        }
    },
    modules: {}
})