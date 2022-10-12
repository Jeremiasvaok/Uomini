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
    getRemeras,
    getCamisas,
    getAbrigos,
    getPantalones
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
    deleteUser,
    queryUser,
    detailsUser
} = require('../controllers/auth')

const {
    getFavorites,
    newFavorite,
    deleteFavorites,
    // clearAllFavorites
} = require('../controllers/favorites')

/************************************************** |RUTAS DE PRODUCTOS Y ORDENAMIENTOS| **************************************************/
routes.get('/products', getAllProducts)
routes.get('/camisas', getCamisas)
routes.get('/abrigos', getAbrigos)
routes.get('/pantalones', getPantalones)
routes.get('/remeras', getRemeras)
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
routes.get('/details/user/:id', detailsUser)
routes.get('/query/user', queryUser)

/************************************************** |RUTAS PARA PRODUCTOS FAVORITOS | **************************************************/
routes.get('/favorites/products', getFavorites)
routes.post('/product/favorite/:idproducts', newFavorite)
routes.delete('/productos/favorites/dalete/:idProducts', deleteFavorites)
// routes.delete('/clear/all', clearAllFavorites)

module.exports = routes