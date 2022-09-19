const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')

 const userSchema = new Schema({
    username:{
        type: String,
        unique:true,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        require:true
    },
    roles:[{
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
 userSchema.statics.encryptPassword = async (password) =>{
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
 }
 //comparar contraseña, en caso que quiera ingresar devuelta a la app
 userSchema.statics.comparePassword = async (password, recivedPassword)=>{ 
   return await bcrypt.compare(password, recivedPassword)
 }
 module.exports = model('User', userSchema)