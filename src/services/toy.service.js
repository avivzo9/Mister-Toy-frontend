import { utilService } from './util.service.js'
import axios from 'axios'

const KEY = 'toy'
const TOY_URL = (process.env.NODE_ENV !== 'development') ?
    '/api/toy' : 'http://localhost:3030/api/toy/';

export const toyService = {
    query,
    remove,
    save,
    getToyById,
    getEmptyToy
}

function query(filter) {
    return axios.get(TOY_URL, { params: filter })
        .then(res => {
            return res.data
        })
}

function getToyById(id) {
    return axios.get(TOY_URL + id).then(res => res.data)
}

function remove(id) {
    return axios.delete(TOY_URL + id).then(res => res.data)
}

function save(toy) {
    if (toy._id) return axios.put(TOY_URL, toy).then(res => res.data)
    else return axios.post(TOY_URL, toy).then(res => res.data)
}

function getEmptyToy(name, price = 100, type, inStock = true) {
    return {
        _id: '',
        name,
        price,
        type,
        createdAt: Date.now(),
        inStock
    }
}

function _createToys() {
    var toys = JSON.parse(localStorage.getItem(KEY))
    if (!toys || !toys.length) {
        toys = [
            _createToy('Bear', 50, 'scary'),
            _createToy('Talking Doll', 100, 'funny'),
            _createToy('Sport car', 120, 'car', false),
        ]
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
    return toys;
}

function _createToy(name, price, type, inStock) {
    const toy = getEmptyToy(name, price, type, inStock)
    toy._id = utilService.makeId()
    return toy;
}