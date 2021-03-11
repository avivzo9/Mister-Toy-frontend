import { httpService } from './http.service.js'

const KEY = 'user/'

export const userService = {
    query,
    remove,
    save,
    login,
    getUserById,
    getEmptyUser
}

function query() {
    // var query = '?'
    // if (filter.searchWord) query += 'q=' + filter.searchWord + '&'
    // if (filter.sortBy) query += 's=' + filter.sortBy + '&'
    // if (filter.stockFilter) query += 'f=' + filter.stockFilter + '&'
    return httpService.get(KEY)
}

function getUserById(id) {
    return httpService.get(KEY + id)
}

function remove(id) {
    return httpService.delete(KEY + id)
}

function save(user) {
    if (user._id) return httpService.put(KEY, user)
    else return httpService.post(KEY, user)
}

function getEmptyUser(fullname, username, password, isAdmin = false) {
    return {
        fullname,
        username,
        password,
        createdAt: Date.now(),
        isAdmin
    }
}

function login(user) {
    // return httpService.get(KEY, user)
}