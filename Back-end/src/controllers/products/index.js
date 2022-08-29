const Products = require('../../models/product/product')

module.exports ={
    getAllProducts: async function getAllProductos( req, res){
        const find = await Products.find()
        res.send(find)
    },

    postProducts:async (req,res)=>{
        const {name, description, price} = req.body
    //   if(!name){
    //     return res.status(404).send('Falta informacion el NOMBRE es incorrecto')
    //   }
    //   if(!description){
    //     return res.send('Falta informacion la DESCRIPCION es incorrecta')
    //   }
    //   if(!price){
    //     return res.send('Falta informacion el PRECIO es incorrecto')
    //   }
    //   else{
        const product = new Products({
            name,
            description,
            price
        })
        product.save()
        .then(()=>{
            return res.status(201).json({msg:'Producto creado', product})
            })
        .catch((error)=>{
             console.log(error)
        })
}



}