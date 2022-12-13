const {model, Schema} = require('mongoose')

const configPageSchema = new Schema({
    imageOne:{
        type: String,
        required : true
    },
    imageTwo:{
        type: String,
        required: true
    },
    imageTree:{
        type: String,
        required: true
    },
    news:{
        ref:'product',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('configPage', configPageSchema)