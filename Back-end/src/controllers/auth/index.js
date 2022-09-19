const User = require('../../models/user/user.js')
require('dotenv').config()
const Role = require('../../models/roles/roles')
const { getToken, getTokenData } = require('../../config')
const {sendEmail, getTemplate} = require('../../config/nodemeiler.js')

module.exports = {

  signUp: async (req, res) => {
    const { username, email, password, roles } = req.body
    try {
      const gmailFound = await User.findOne({email : email})
      if(gmailFound) return res.status(403).send('Ya existe un usuario con ese Gmail')
      const usernemeFound = await User.findOne({username : username});
      if(usernemeFound) return res.status(403).send('Ya existe un usuario con ese Nombre')

      const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
      })
    
      if(roles) {
        const foundRole = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRole.map((role) => role._id)//espara hacer la relacion necesitamos el id
      } else {
        const role = await Role.findOne({ name: "user" })
        newUser.roles = [role._id]
      }
      const saveUser = await newUser.save()
      const token = getToken(saveUser._id)
       //obtener template
       const template = getTemplate(saveUser.username, token)
       //enviamos mail
       await sendEmail(saveUser.email,'Confirmar usuario', template)
       
       res.json({saveUser, token })

    } catch (error) {
      console.log(error)
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body
      const userFound = await User.findOne({ email: email }).populate('roles')//como el user se relaciona con roles el metodo populate hace que se pueble y que no me aparezca solo el id sino tambien el nombre que contiene ese id 
      console.log(userFound)
      if (!userFound) return res.status(404).send("Usuario o contraseña invalida");
      
      const comparePassword = await User.comparePassword(password, userFound.password)// hacemos una validacion y comparamos la contraseña que nos envia el usuario , si la contraseña que nos envia el usuario es igual a la contraseña que trajimos por email esta todo correcto
      if (!comparePassword) return res.status(404).send("Contraseña invalida")

     const token = getToken(userFound._id)
     
      res.json({token})
    } catch (error) {
      console.log(error)
    }
  },

  confirmEmail: async (req,res)=>{
     const {token } = req.params
     try {
      //verificar data
      let data = getTokenData(token)
      console.log(data.id)
      if(!data){
        return res.status(404).send('Error al obtener la data')
      }
      //verificar usuario
      const user = await User.findOne(data.id)
       if(!user){
        return res.status(404).send('No existe el usuario')
       }
       if(data.id !== user._id){
        return res.redirect('../../../public/error.html')
       }
       user.isConfirmed = true
       await user.save()
       return res.redirect('../../../public/confirm.html')
     } catch (error) {
       console.log(error)
     }
}
}