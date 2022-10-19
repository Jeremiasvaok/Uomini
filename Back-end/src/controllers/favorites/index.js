const User = require('../../models/user/user.js')
const { getTokenData } = require('../../config/index')

module.exports = {

    newFavorite: async (req, res) => {
        try {
            const { idproducts } = req.params
            const authorization = req.get('authorization')
            if(!authorization){
                return res.status(401).json({message: 'No tienes permiso para hacer estoLL'})
            }
            if(authorization.split(' ')[0].toLowerCase()  !== 'bearer'){
                return res.status(401).json({message: 'No tienes perimiso para hacer esto'})
            }
            const token = authorization.split(' ')[1]
            const data = getTokenData(token)
            if(!data){
                return res.status(401).json(' No tienes permiso para hacer esto')
            }
            const user = await User.findById(data.id).populate('favorites', {
                name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1
            })
            console.log(user)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            console.log(user.favorites)
            if (!idproducts.length || !idproducts) {
                return res.json({ msg: 'No se encontro un producto' })
            }
            if (!user.favorites) {
                user.favorites = [idproducts]
                await user.save()
                let userUpdate = await user.populate('favorites', { name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1 })
                return res.json({ msg: 'se ha guardado con exito'/*, favs: userUpdate.favourites*/ })
            }

            const existente = user.favorites.includes(idproducts)

            if (existente) {
                return res.json({ msg: 'Este item ya está en favoritos' })
            }

            user.favorites = [...user.favorites, idproducts]
            await user.save()
            let userUpdate = await user.populate('favorites', { name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1 })
            console.log(userUpdate)
            return res.json({ msg: 'Se guardo con exito'/*,favs: userUpdate.favourites*/ })

        } catch (error) {
            console.log(error)
        }
    },

    deleteFavorites: async (req, res) => {
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
            const user = await User.findById(data.id).populate('favorites', {
                name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1
            })
            console.log(user)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (!idProducts.length || !idProducts) {
                return res.json({ msg: 'No se encontro un producto' })
            }
            const favoritos = user.favorites
            console.log(favoritos)
            user.favorites = favoritos.filter(p => p.id !== idProducts)
            await user.save()
            return res.json({ msg: 'Producto eliminado con exito', favs: user.favorites })
        } catch (error) {
       console.log(error)
        }
    },
    
    getFavorites: async(req, res)=>{
        try {
            const authorization = req.get('authorization')
            if(!authorization){
                return res.status(401).json({message: 'No tienes permiso para hacer estoLL'})
            }
            if(authorization.split(' ')[0].toLowerCase()  !== 'bearer'){
                return res.status(401).json({message: 'No tienes perimiso para hacer esto'})
            }
            const token = authorization.split(' ')[1]
            const data = getTokenData(token)
            if(!data){
                return res.status(401).json(' No tienes permiso para hacer esto')
            }
            const user = await User.findById(data.id).populate('favorites', {
                name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1
            })
            console.log(user)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }

            return res.status(200).json(user.favorites)
        } catch (error) {
            console.log(error)
        }
    },

// clearAllFavorites: async (req,res)=>{
//     try {
//         const authorization = req.get('authorization')
//         if(!authorization){
//             return res.status(401).json('No tienes permiso para hacer esto')
//         }
//         if(authorization.split(' ')[0].toLowerCase() !== 'berear'){
//             return res.status(401).json('No tienes permiso para hacer esto')
//         }
//         const token = authorization.split(' ')[1]
//         const data = getTokenData(token)
//          if(!data){
//             return res.status(401).json('No tienes permiso para hacer esto')
//          }
//         const user = await User.findById(data.id)
//         if(!user){
//             return res.status(404).json('Usuario no encontrado')
//         }
     
//         const clearAll = await User.deleteMany({})
//         res.send('se elimino todo la verga')
//     } catch (error) {
//         console.log(error)
//     }
// }

}