const {Router} = require('express')
const routes = Router()
const {
    getAllProducts,
    postProducts,
    queryAllProducts,
    updateProduct,
    deleteProducts,
    getProduct,
    orderPrice,
    orderColor
} = require('../controllers/products')

/************************************************** |RUTAS DE PRODUCTOS| **************************************************/
routes.get('/products', getAllProducts)
routes.get('/product/:id', getProduct)
routes.get('/category-products', queryAllProducts)
routes.get('/order', orderPrice)
routes.get('/order-color', orderColor)
routes.post('/create-products', postProducts)
routes.put('/update-products/:id', updateProduct)
routes.delete('/delete-products/:id',deleteProducts)



module.exports = routes