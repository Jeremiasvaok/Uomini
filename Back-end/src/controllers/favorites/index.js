const User = require('../../models/user/user.js')
const { getTokenData } = require('../../config/index')

module.exports = {

    newFavorite: async (req, res) => {
        try {
            const { idproducts } = req.paramas
            const autorization = req.get('autorization')
            if (!autorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (autorization.split(' ')[0] !== 'berear') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(404).json({ message: 'No se ha encontrado usuario' })
            }
            console.log(user.favorites)
            if (!idproducts.length || !idproducts) {
                return res.json({ msg: 'No se encontro un producto' })
            }
            if (!user.favorites) {
                user.favorites = [idproducts]
                await user.save()
                let userUpdate = await user.populate('favourites', { name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1 })
                return res.json({ msg: 'se ha guardado con exito'/*, favs: userUpdate.favourites*/ })
            }

            const existente = user.favorites.includes(idproducts)

            if (existente) {
                return res.json({ msg: 'Este item ya está en favoritos' })
            }

            user.favorites = [...user.favorites, idProducts]
            await user.save()
            let userUpdate = await user.populate('favourites', { name: 1, description: 1, price: 1, image: 1, category: 1, color: 1, _id: 1 })
            return res.json({ msg: 'se ha guardado con exito'/*,favs: userUpdate.favourites*/ })

        } catch (error) {
            console.log(error)
        }
    },

    deleteFavorites: async (req, res) => {
        try {
            const { idProducts } = req.paramas
            const autorization = req.get('autorization')
            if (!autorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (autorization.split(' ')[0] !== 'berear') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id).populate("fovorites", {
                name: 1,
                description: 1,
                price: 1,
                image: 1,
                category: 1,
                color: 1,
                _id: 1
            })
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (!idProducts.length || !idProducts) {
                return res.json({ msg: 'No se encontro un producto' })
            }
            const favoritos = user.favorites
            user.favorites = favoritos.filter(p => p.id !== idProducts)
            await user.save()
            return res.json({ msg: 'Producto eliminado con exito', favs: user.favorites })
        } catch (error) {
       console.log(error)
        }
    },
    
    getFavorites: async(req, res)=>{
        try {
            const autorization = req.get('autorization')
            if(!autorization){
                return res.status(401).json({message: 'No tienes permiso para hacer esto'})
            }
            if(autorization.split(' ')[0] !== 'berear'){
                return res.status(401).json({message: 'No tienes perimiso para hacer esto'})
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if(!data){
                return res.status(401).json(' No tienes permiso para hacer esto')
            }
            const user = await User.findById(data.id).populate("fovorites", {
                name: 1,
                description: 1,
                price: 1,
                image: 1,
                category: 1,
                color: 1,
                _id: 1
            })
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            return res.status(200).json(user.favorites)
        } catch (error) {
            
        }
    }
}