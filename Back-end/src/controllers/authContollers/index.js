const User = require('../../models/user/user.js')
require('dotenv').config()
const Role = require('../../models/roles/roles')
const { getToken } = require('../../config')

module.exports = {

  signUp: async (req, res) => {
    const { username, email, password, roles } = req.body
    try {
      //const userFound = await User.find({email})
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
      res.json({saveUser, token })
    } catch (error) {
      console.log(error)
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body
      const userFound = await User.findOne({ email: email }).populate('roles')//como el user se relaciona con roles el metodo populate hace que se pueble y que no me aparezca solo el id sino tambien el nombre que contiene ese id 
      if (!userFound) return res.status(404).send("Usuario no encontrado");

      const comparePassword = await User.comparePassword(password, userFound.password)// hacemos una validacion y comparamos la contraseña que nos envia el usuario , si la contraseña que nos envia el usuario es igual a la contraseña que trajimos por email esta todo correcto
      if (!comparePassword) return res.status(404).send("Contraseña invalida")

     const token = getToken(userFound._id)
  
      res.json({token})
    } catch (error) {
      console.log(error)
    }
  }
}