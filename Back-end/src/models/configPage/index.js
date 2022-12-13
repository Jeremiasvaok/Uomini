const {model, Schema} = require('mongoose')

const configPageSchema = new Schema({
    imageOne:{
        type: String,
    },
    imageTwo:{
        type: String,
      
    },
    imageTree:{
        type: String,
    },
    news:{
        ref:'product',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('configPage', configPageSchema)