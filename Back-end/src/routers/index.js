const {Router} = require('express')
const routes = Router()
const {isAdmin, isModerator, verifyToken} = require('../middlewares')
const {
    getAllProducts,
    postProducts,
    queryAllProducts,
    updateProduct,
    deleteProducts,
    getProduct,
    orderByPrice,
    orderByColor,
    orderByCategory,
} = require('../controllers/products');

const {
    signUp,
    signIn
} = require('../controllers/authContollers')

/************************************************** |RUTAS DE PRODUCTOS Y ORDENAMIENTOS| **************************************************/
routes.get('/products', getAllProducts)
routes.get('/product/:id', getProduct)
routes.get('/category-products', queryAllProducts)
routes.get('/order', orderByPrice)
routes.get('/order-color', orderByColor)
routes.get('/order-category', orderByCategory)
routes.post('/create-products', [verifyToken, isModerator, isAdmin], postProducts)
routes.put('/update-products/:id', [verifyToken, isModerator, isAdmin], updateProduct)
routes.delete('/delete-products/:id', [verifyToken, isModerator], deleteProducts)

/************************************************** | AUTH | **************************************************/
routes.post('/signup', signUp)
routes.post('/signin', signIn)

module.exports = routes