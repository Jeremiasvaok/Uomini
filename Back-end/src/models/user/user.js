 const {Schema, model} = require('mongoose')

 const userSchema = new Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }

 })
 module.exports = model('User', userSchema)