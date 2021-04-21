import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const KEY = 'toy/'

export const toyService = {
    query,
    remove,
    save,
    getToyById,
    getEmptyToy
}

function query(filter = {}) {
    var query = '?'
    if (filter.searchWord) query += 'q=' + filter.searchWord + '&'
    if (filter.sortBy) query += 's=' + filter.sortBy + '&'
    if (filter.stockFilter) query += 'f=' + filter.stockFilter + '&'
    return httpService.get(KEY + query, filter)
}

function getToyById(id) {
    return httpService.get(KEY + id)
}

function remove(id) {
    return httpService.delete(KEY + id)
}

function save(toy) {
    if (toy._id) return httpService.put(KEY + toy._id, toy)
    else return httpService.post(KEY, toy)
}

function getEmptyToy(name, price = 100, type, inStock = true) {
    return {
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