const User = require('../../models/user/user.js')
const { getTokenData } = require('../../config/index')

module.exports = {

    newFavorite: async (req, res) => {
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
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(404).json({ message: 'No se ha encontrado usuario' })
            }
            console.log(user.favorites)
            if (!idProducts.length || !idProducts) {
                return res.json({ msg: 'No se encontro un producto' })
            }
            if (!user.favorites) {
                user.favorites = [idProducts]
                await user.save()
                let userUpdate = await user.populate('favourites', { name: 1, description: 1, price: 1, image: 1, category: 1, color: 1 })
                return res.json({ msg: 'se ha guardado con exito'/*, favs: userUpdate.favourites*/ })
            }

            const existente = user.favorites.includes(idProducts)

            if (existente) {
                return res.json({ msg: 'Este item ya está en favoritos' })
            }

            user.favorites = [...user.favorites, idProducts]
            await user.save()
            let userUpdate = await user.populate('favourites', {  name: 1, description: 1, price: 1, image: 1, category: 1, color: 1  })
            return res.json({ msg: 'se ha guardado con exito'/*,favs: userUpdate.favourites*/ })

        } catch (error) {
            console.log(error)
        }
    }
}