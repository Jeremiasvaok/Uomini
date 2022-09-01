const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type:String,
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
        categories:{
                type: String,
                required:true
            }
        },
     count:{
        type:Number,
        require:true

     },
     color:{
            type: Array ,
            required:true,
    }
})

module.exports = model('product', productSchema)