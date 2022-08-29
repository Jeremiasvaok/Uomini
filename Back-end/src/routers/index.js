const {Router} = require('express')
const routes = Router()
const {
    getAllProducts,
    postProducts
} = require('../controllers/products')

routes.get('/', getAllProducts)
routes.post('/create', postProducts)

module.exports = routes