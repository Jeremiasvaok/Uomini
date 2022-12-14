require('dotenv').config()
const { SECRET_TOKEN } = process.env
const jwt = require('jsonwebtoken');
const Roles = require('../models/roles/roles');
const User = require('../models/user/user');

const getToken = (payload) => {
    return jwt.sign({id: payload}, SECRET_TOKEN, { expiresIn: '365d' }) // crea un token e¿que espira en un año
}

//obtenos la data de un token 
const getTokenData = (token) => {
    let data = null  //el token principalmente esta en null porque no le pasamos nada ningun token
    jwt.verify(token, SECRET_TOKEN, (err, decoded) => { //verificamos el token que nos pasan si es verdaddero o si no hay token
        if(err) { // si hay un error envia un mensaje
            console.log('Error al obtener data del token')
        } 
        data = decoded // data ahora va a tener el decoded, que seria el token 
       // console.log(data)
    })
    return data //retornamos la data que seria el token
}

const isAdmin = async(tokenid)=>{
    try {
      const user = await User.findById(tokenid, {password: 0})
      //console.log(user)
      if(!user){
         console.log('No existe ese usuario')
      }
      const role = await Roles.find({_id : {$in:user.roles}})
      console.log(role)
      for(let i = 0; i < role.length; i++){
        if(role[i].name === 'admin'){
            return role
        }
      }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getToken,
    getTokenData,
    isAdmin
}