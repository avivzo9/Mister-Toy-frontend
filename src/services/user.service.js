import { httpService } from './http.service.js'

const KEY = 'user/'

export const userService = {
    query,
    remove,
    save,
    login,
    signup,
    logout,
    getUserById,
    getEmptyUser,
    getLoginUser
}

function query() {
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

function getLoginUser(username, password) {
    return {
        username,
        password,
    }
}

function login(user) {
    const loginUser = JSON.stringify(user)
    return httpService.put(KEY + 'login/' + loginUser)
}

function signup(user) {
    const signupUser = JSON.stringify(user)
    return httpService.post(KEY + 'signup/' + signupUser)
}

function logout() {
    return httpService.put(KEY + 'logout')
}