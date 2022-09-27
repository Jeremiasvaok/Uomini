const {Router} = require('express')
const routes = Router()
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
    signIn,
    signInAdmin,
    confirmEmail,
    forgotPassword,
    forgotPasswordConfirm,
    changeUser,
    findUsers,
    deleteUser
} = require('../controllers/auth')

const {
    getFavorites,
    newFavorite,
    deleteFavorites
} = require('../controllers/favorites')

/************************************************** |RUTAS DE PRODUCTOS Y ORDENAMIENTOS| **************************************************/
routes.get('/products', getAllProducts)
routes.get('/product/:id', getProduct)
routes.get('/category-products', queryAllProducts)
routes.get('/order', orderByPrice)
routes.get('/order-color', orderByColor)
routes.get('/order-category', orderByCategory)
routes.post('/create-products', postProducts)
routes.put('/update-products/:id', updateProduct)
routes.delete('/delete-products/:id', deleteProducts)

/************************************************** | RUTAS AUTH | **************************************************/
routes.post('/signup', signUp)
routes.post('/signin', signIn)
routes.post('/signin/admin', signInAdmin)
routes.get('/user/confirm/token/:token', confirmEmail)
routes.post('/forgot/password', forgotPassword)
routes.put('/user/fargot/password/token/:token', forgotPasswordConfirm)
routes.put('/user/change', changeUser)
routes.get('/find/users', findUsers)
routes.delete('/delete/user/:id', deleteUser)

/************************************************** |RUTAS PARA PRODUCTOS FAVORITOS | **************************************************/
routes.get('/favorites/products', getFavorites)
routes.post('/product/favorite/:idproducts', newFavorite)
routes.delete('/productos/favorites/dalete/:idProducts', deleteFavorites)

module.exports = routes