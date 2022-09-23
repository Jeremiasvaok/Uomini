require('dotenv').config()
const path = require('path')
const Role = require('../../models/roles/roles')
const User = require('../../models/user/user.js')
const { getToken, getTokenData, isAdmin } = require('../../config')
const {
  sendEmail,
  getTemplate,
  fargotPasswordTemplate,
  successForgotPassword
} = require('../../config/nodemeiler.js')


module.exports = {

  signUp: async (req, res) => {
    const { firstName, lastName, email, password, roles } = req.body
    try {
      const gmailFound = await User.findOne({ email: email })
      if (gmailFound) return res.status(403).json({msg:'Ya existe un usuario con ese Gmail'})

      const newUser = new User({
        firstName,
        lastName,
        email,
        password: await User.encryptPassword(password),
      })

      if (roles) {
        const foundRole = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRole.map((role) => role._id)//espara hacer la relacion necesitamos el id
      } else {
        const role = await Role.findOne({ name: "user" })
        newUser.roles = [role._id]
      }
      const saveUser = await newUser.save()
      const token = getToken(saveUser._id)
      //obtener template
      const template = getTemplate(saveUser.firstName, token)
      //enviamos mail
      await sendEmail(saveUser.email, 'Confirmar usuario', template)

      // res.json({saveUser, token })
      return res.status(200).json({ msg: `se envio un Email a: ${saveUser.email} para confirmar el usuario` })
    } catch (error) {
      console.log(error)
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body
      const userFound = await User.findOne({ email: email }).populate('roles')//como el user se relaciona con roles el metodo populate hace que se pueble y que no me aparezca solo el id sino tambien el nombre que contiene ese id 
      // console.log(userFound)
      if (!userFound) return res.status(404).json({msg:"Usuario o contraseña invalida"});
      if (!userFound.isConfirmed) {
        return res.status(401).json({ msg: 'El usuario no confirmo su cuenta' })
      }
      const comparePassword = await User.comparePassword(password, userFound.password)// hacemos una validacion y comparamos la contraseña que nos envia el usuario , si la contraseña que nos envia el usuario es igual a la contraseña que trajimos por email esta todo correcto
      if (!comparePassword) return res.status(404).send("Contraseña invalida")

      const token = getToken(userFound._id)

      res.json({ token })
    } catch (error) {
      console.log(error)
    }
  },

  signInAdmin: async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email: email })
      if (!user) {
        return res.status(404).json({msg: "Usuario o contraseña invalida"});
      }
      if (!user.isConfirmed) {
        return res.status(401).json({ msg: "El usuario no confirmo su cuenta" })
      }
      const comparePassword = await User.comparePassword(password, user.password)
      if (!comparePassword) {
        return res.status(404).json({msg:"Usuario o contraseña invalida"})
      }
      const id = user._id
      const admin = await isAdmin(id)
    try {
        const infoName = admin.map((role) => role.name)
        console.log(datoss[0])
        if (infoName[0] !== 'admin') return res.status(403)
      } catch (error) {
        return res.status(403).json({msg:'No tenes permitido ingresar porque no sos administrador'})
      }
      const token = getToken(user._id)
      return res.json({ token })
    } catch (error) {
      console.log(error)
    }
},

  confirmEmail: async (req, res) => {
    const { token } = req.params
    try {
      //verificar data
      let data = getTokenData(token)
      // console.log(data.id, 'aqui')
      //verificar usuario
      const user = await User.findById(data.id)
      if (!user) {
        return res.sendFile(path.join(__dirname, '../../public/error.html'))
      }
      if (data === null) {
        return res.sendFile(path.join(__dirname, '../../public/tokenError.html'))
      }

      user.isConfirmed = true
      await user.save()
      return res.sendFile(path.join(__dirname, '../../public/confirm.html'))
    } catch (error) {
      console.log(error)
    }
  },

  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body
      if (!email) {
        return send.status(404).json({msg:'El campo es obligatorio'})
      }
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(404).json({ msg: 'Usuario no encontrado' })
      }
      const token = getToken(user._id)
      console.log(token)
      const template = fargotPasswordTemplate(user.firstName, token)
      await sendEmail(user.email, 'Cambiar Contraseña', template)
      return res.status(200).json({ msg: `Se le envio un Email a: ${user.email}, para cambiar la contraseña` })
    } catch (error) {
      console.log(error)
    }
  },

  forgotPasswordConfirm: async (req, res) => {
    const { token } = req.params
    console.log(req.params)
    const authorization = req.get('authorization')
    if (!authorization) {
      return res.status(401).json({msg: 'No tienes permiso para hacer esto'})
    }
    if (authorization.split(' ')[0].toLowerCase() !== 'berear') {
      return res.status(401).json({msg: 'No tienes permiso para hacer esto'})
    }
    const data = getTokenData(token)
    const user = await User.findById(data.id)
    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' })
    if (!user.isConfirmed) return res.status(403).json({ msg: 'Tu cuenta no esta confirmada, necesita ser confirmada para cambiar la contraseña' })

    const { password1, password2 } = req.body

    if (!password1 || !password2) {
      return res.status(404).json({msg:'No se ingresaron las contraseñas'})
    }
    if (password1 !== password2) {
      return res.status(403).json({ msg: 'Las contraseñs no coinciden' })
    }
    const update = await User.findByIdAndUpdate(data.id, { password: await User.encryptPassword(password2) })
    const template = successForgotPassword(user.firstName)

    await sendEmail(user.email, 'Exito', template)

    console.log(res.json({ update }))
  },

  forgotEmail: async (req, res) => {

  },

  changeUser: async (req, res) => {

  },

}