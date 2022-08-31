const Products = require('../../models/product/product')

module.exports ={
    getAllProducts: async (req, res)=>{
      try {
        const find = await Products.find()
        const findMap = find.map((p) =>{
           return{
              id: p._id,
              name: p.name,
              description: p.description,
              price: p.price,
              image: p.image,
              category: p.category.categorys.split(',')[0] && p.category.categorys[1],
              color: p.color
           }
        })
       return res.status(200).send(findMap)
      } catch (error) {
        //return res.status(500).json({massage: error})
      }
    },
    //  queryAllProducts: async (req,res)=>{
    //    try {
    //     const{name, category} = req.query
    //     const find = await Products.find()
    //     const findMap = fiand.map((p)=>{
    //       return{
    //         id: p._id,
    //         name: p.name,
    //         description: p.description,
    //         price: p.price,
    //         image: p.image,
    //         category: p.category,
    //         color: p.color
    //      }
    //     })
    //     //  if(!name && !invierno && !primavera && !verano && !otoño){
    //     //   return res.status(404).send('Producto no encontrado')
    //      if(name){
    //        const info = findMap.find((d)=>d.name.toLowerCase().includes(name.toLowerCase()))
    //      }
    //      else if(category){
    //       const info = findMap.find((d)=>d.name.toLowerCase().includes(category.toLowerCase()))
    //      }
    //      return res.status(200).send(info)
    //    } catch (error) {
        
    //    }
    //  },


    postProducts:async (req,res)=>{
        const {name, description, price, image, category, count, color} = req.body
      if(!name){
        return res.status(404).send('Falta información, el NOMBRE es incompleto')
      }
      else if(!description){
        return res.status(404).send('Falta información, la DESCRIPCION es incompleto')
      }
      else if(!price){
        return res.status(404).send('Falta información, el PRECIO es incompleto')
      }
      else if(!image){
        return res.status(404).send('Falta información, la IMAGEN es incompleto')
      }
      else if(!category){
        return res.status(404).send('Falta información, la CATEGORIA es incompleto')
      }
      else if(!count){
        return res.status(404).send('Falta información, la CANTIDAD es incompleto')
      }
      else if(!color){
        return res.status(404).send('Falta información, los COLORES es incompleto')
      }
      else{
        const product = new Products({
            name,
            description,      
            price,
            image,
            category,
            count,
            color
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


}