// const product = require('./src/models/product/product')
const  express = require('express')
 

const app = express()

app.get('/', (req,res )=>{
   res.send('hello')
})

app.listen(3001,()=>{
    console.log("%escuchando el puerto 3000%")
})

// require('./mongo.js')

// async function main(){
//     const products = new product({
//         name:"buzo",
//         description:"buzo rojo",
//         price: 2400
//     })
//     const productss = await products.save()
//     return productss
// }
// main()
//     .then(productoSave => console.log(productoSave))
//     .catch(error => console.log(error))