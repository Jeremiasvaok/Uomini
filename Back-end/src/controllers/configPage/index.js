const { getTokenData, isAdmin } = require('../../config')
const Page = require('../../models/configPage')
const User = require('../../models/user/user')

module.exports = {

    addConfig: async (req, res) => {
        const { imageOne, imageTwo, imageTree } = req.body
        try {
            const authorization = req.get('authorization')
            if (!authorization) {
                return res.status(401).json({ msg: 'No tienes permiso para hacer esto' })
            }
            if (authorization.split()[0].toLowerCase() !== 'bearer') {
                return res.status(401).json({ msg: 'No tienes permiso para hacer esto' })
            }

            const token = authorization.split()[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ msg: 'No tienes permitido hacer esto' })
            }
            const user = await User.findById(data)
            if (!user) {
                return res.status(404).json({ msg: 'Usuario no encontrado' })
            }
            const dataTwo = await isAdmin(data.id)
            try {
                const infoName = dataTwo.map((role) => role.name)
                if (infoName[0] !== 'admin') return res.status(403)
            } catch (error) {
                return res.status(403).send('Necesitas ser administrador para crear un producto')
            }

            const addImage = new Page({

                imageOne,
                imageTwo,
                imageTree
            })
            addImage.save()
                .then(() => {
                    return res.json('ADD')
                })
        } catch (error) {
            return res.status(500).send(error)
        }
    },

    newNovedad: async (req, res) => {
        try {
            const { id } = req.params
            const authorization = req.get('authorization')
            if(!authorization){
                return res.status(401).json({message: 'No tienes permiso para hacer estoLL'})
            }
            if(authorization.split(' ')[0].toLowerCase()  !== 'bearer'){
                return res.status(401).json({message: 'No tienes perimiso para hacer esto'})
            }
            const token = authorization.substring(7)
            const data = getTokenData(token)
            console.log(data)
            if(!data){
                return res.status(401).json(' No tienes permiso para hacer esto')
            }
            const user = await User.findById(data.id).populate('new', {
                name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1
            })
            console.log(user)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            console.log(user.new)
            if (!id.length || !id) {
                return res.json({ msg: 'No se encontro un producto' })
            }
            if (!user.new) {
                user.new = [id]
                await user.save()
                let userUpdate = await user.populate('new', { name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1 })
                return res.json({ msg: 'se ha guardado con exito'/*, favs: userUpdate.favourites*/ })
            }

            const existente = user.new.includes(id)

            if (existente) {
                return res.json({ msg: 'Este item ya está en favoritos' })
            }

            user.new = [...user.new, id]
            await user.save()
            let userUpdate = await user.populate('new', { name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1 })
            console.log(userUpdate)
            return res.json({ msg: 'Se guardo con exito' /*, favs: userUpdate.favourites*/})

        } catch (error) {
            console.log(error)
        }
    },

    deleteNovedad: async (req, res) => {
        try {
            const { idProducts } = req.params
            const authorization = req.get('authorization')
            if (!authorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (authorization.split(' ')[0].toLowerCase()  !== 'bearer') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = authorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id).populate('new', {
                name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1
            })
            console.log(user)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (!idProducts.length || !idProducts) {
                return res.json({ msg: 'No se encontro un producto' })
            }
            const favoritos = user.new
            console.log(favoritos)
            user.new = favoritos.filter(p => p.id !== idProducts)
            await user.save()
            return res.json({ msg: 'Producto eliminado con exito', favs: user.new })
        } catch (error) {
       console.log(error)
        }
    },
    
    getNovedad: async(req, res)=>{
        try {
            const authorization = req.get('authorization')
            if(!authorization){
                return res.status(401).json({message: 'No tienes permiso para hacer esto'})
            }
            if(authorization.split(' ')[0].toLowerCase() !== 'bearer'){
                return res.status(401).json({message: 'No tienes perimiso para hacer esto'})
            }
            const token = authorization.split(' ')[1]
            const data = getTokenData(token)
            if(!data){
                return res.status(401).json(' No tienes permiso para hacer esto')
            }
            const user = await User.findById(data.id).populate('new', {
                name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1
            })
            //console.log(user)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }

            return res.status(200).json(user.new)
        } catch (error) {
            console.log(error)
        }
    },
}