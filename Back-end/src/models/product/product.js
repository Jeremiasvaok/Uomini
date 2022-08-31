const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type:String,
        unique:true, //el numbre tiene que ser unico
        required:true // es requerido
    },
    description: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }, 
     image:{
        type: String,
        unique:true,
        required:true
     },
     category:{
            categorys:{
                type: String,
                required:true
            }
        },
     count:{
        type:Number,
        require:true
     },
     color:{
        colors:{
            type: String,
            required:true,
        }
    }
})

module.exports = model('product', productSchema)