const {Router} = require('express')
const routes = Router()
const {
    getAllProducts,
    postProducts,
    queryAllProducts,
    updateProduct,
    deleteProducts,
} = require('../controllers/products')

/************************************************** |RUTAS DE PRODUCTOS| **************************************************/
routes.get('/products', getAllProducts)
routes.get('/category-products', queryAllProducts)
routes.post('/create-products', postProducts)
routes.put('/update-producto/:id', updateProduct)
routes.delete('/delete-products/:id',deleteProducts)



module.exports = routes