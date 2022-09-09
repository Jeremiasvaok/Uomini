const User = require('../../models/user/user.js')
const Role = require('../../controllers/role/index')
const jwt = require('jsonwebtoken')
module.exports = {

  signUp: async (req, res) => {
    const { username, email, password, roles } = req.body
    try {
      //const userFound = await User.find({email})
      const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
        roles,

      })
      if (roles) {
        const foundRole = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRole.map((role) => role._id)
      } else {
        const role = await Role.find({ name: "user" })
        newUser.roles = [role._id]
      }

      const saveUser = await newUser.save()
      const token = jwt.sign({ id: saveUser._id }, 'PRODUCTS', { expiresIn: 86400 /*expira 24 horas */ }//crea un token
      )
      res.json({ token })
    } catch (error) {
      console.log(error)
    }
  },
  
  signIn: async (req, res) => {
    res.send('singIn')
  }
}