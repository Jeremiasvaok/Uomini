const Products = require('../../models/product/product')

module.exports ={
    getAllProducts: async function getAllProductos( req, res){
        const find = await Products.find()
        res.send(find)
    },
    postProducts:async (req,res)=>{
        const {name, description, price} = req.body
        const product = new Products({
            name,
            description,
            price
        })
        product.save()
                .then(()=>{
                    return res.send(product)
                })
                .catch((error)=>{
                    console.log(error)
                })
    }




}