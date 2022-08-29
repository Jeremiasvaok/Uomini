const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type:String,
        unique:true, //el numbre tiene que ser unico
        required:true // es requerido
    },
    description: {
        type:String,
    },
    price:{
        type:Number,
        default: 0 // si no pasan un precio por defecto es 0
    }
})

module.exports = model('product', productSchema)