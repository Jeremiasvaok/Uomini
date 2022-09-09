require('dotenv').config()
const { SECRET_TOKEN } = process.env
const jwt = require('jsonwebtoken')
const Role = require('../models/roles/roles.js')
const user = require('../models/user/user.js')
const User = require('../models/user/user.js')

//verificamos si el token existe 
const verifyToken = async(req,res, next)=>{
    try {
        const token = req.headers["token"]
        console.log(token)
        if(!token) return res.status(403).send('Token no entregado');
       
        const tokenUser = jwt.verify(token, SECRET_TOKEN)
       req.userId = tokenUser.id
        const user = await User.findById(req.userId, {password:0})//con el password en 0 lo que hacemo es no mostrar la contraseña porque no la necesitamos 
        console.log(user)
        if(!user) return res.status(404).send("User no encontrado")
        next() // el next sirve para que que valla a la sigiente funcion que es crear el producto, modificar o eliminar         
    } catch (error) {
        return res.status(500).send("No autorizado")
    }
}

 
const isModerator = async (req,res,next)=>{
  try {
    const userr = User.findById(req.userId)
   const roles =await Role.find({_id: {$in: userr.roles}})
   console.log(roles)
   next()
  } catch (error) {
    console.log(error)
  }
}

const isAdmin = async (req,res,next)=>{
 try {
    
 } catch (error) {
    
 }
}
module.exports = {verifyToken, isModerator, isAdmin}