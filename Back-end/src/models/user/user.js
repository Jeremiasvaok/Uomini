const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    },
    favorites: [{
        ref: "Product",
        type: Schema.Types.ObjectId
    }],
    img: {
        type: String,
    default: 'data:image/png;base64,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'
    },
    roles: [{
        ref: "Role", //el ref es para decir que esta relacionado con otro modelo de datos 
        type: Schema.Types.ObjectId  //obtenemos el id de la referencia
    }],
    isConfirmed: {
        type: Boolean,
        required: true,
        default: false
    },
})

// cifrar contrasrña
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}
//comparar contraseña, en caso que quiera ingresar devuelta a la app
userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword)
}
module.exports = model('User', userSchema)