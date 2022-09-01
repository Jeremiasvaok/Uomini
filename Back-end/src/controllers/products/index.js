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
              category: p.category.categories,
              count: p.count,
              color: p.color
           }
        })
       return res.status(200).send(findMap)
      } catch (error) {
        return res.status(500).send(error)
      }
    },

      getProduct: async (req,res)=>{
        try {
          const id = req.params.id
          if(id){
          const product = Products.findById(id)
          return res.status(200).send(product)
          }else{
            return res.status(404).send('Producto no encontrado')
          }
        } catch (error) {
          return res.status(500).send(error)
        }
       },

     queryAllProducts: async (req,res)=>{
       try {
        const find = await Products.find()
        const findMap = find.map((p)=>{
          return{
            id: p._id,
            name: p.name,
            description: p.description,
            price: p.price,
            image: p.image,
            category: p.category.categories,
            count: p.count,
            color: p.color
         }
        })
        const{name} = req.query
         if(name){
           const info = findMap.filter((d)=>d.name.toLowerCase().includes(name.toLowerCase()) || d.category.toLowerCase().includes(name.toLowerCase()))
           info.length ? res.status(200).send(info) :
            res.status(404).send('Producto no encontrado')
          }else{
           return res.status(200).send(findMap)
          }
       } catch (error) {
        return res.status(500).send(error)
       }
     },
      
    postProducts:async (req,res)=>{
        const {name, description, price, image, category, count, color} = req.body
      if(!name){
        return res.status(404).send('Falta información, el NOMBRE esta incompleta')
      }
      else if(!description){
        return res.status(404).send('Falta información, la DESCRIPCION esta incompleta')
      }
      else if(!price){
        return res.status(404).send('Falta información, el PRECIO esta incompleta')
      }
      else if(!image){
        return res.status(404).send('Falta información, la IMAGEN esta incompleta')
      }
      else if(!category){
        return res.status(404).send('Falta información, la CATEGORIA esta incompleta')
      }
      else if(!count){
        return res.status(404).send('Falta información, la CANTIDAD esta incompleta')
      }
      else if(!color){
        return res.status(404).send('Falta información, los COLORES esta incompleta')
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
          return res.status(500).send(error)
        })
    }
},

  updateProduct: async (req,res)=>{
    try {
      const {name, description, price, image, category, count, color} = req.body
      const {id} = req.params
      if(!name){
        return res.status(404).send('Falta información, el NOMBRE esta incompleta')
      }
      else if(!description){
        return res.status(404).send('Falta información, la DESCRIPCION esta incompleta')
      }
      else if(!price){
        return res.status(404).send('Falta información, el PRECIO esta incompleta')
      }
      else if(!image){
        return res.status(404).send('Falta información, la IMAGEN esta incompleta')
      }
      else if(!category){
        return res.status(404).send('Falta información, la CATEGORIA esta incompleta')
      }
      else if(!count){
        return res.status(404).send('Falta información, la CANTIDAD esta incompleta')
      }
      else if(!color){
        return res.status(404).send('Falta información, los COLORES esta incompleta')
      }
      if( id && name && description && price && image && category && count && color){
       const update = await Products.findByIdAndUpdate(id , { name, description, price, image, category, count, color})
       return res.status(200).json({msg:"Producto modificado", update})
      }
    } catch (error) {
     return res.status(500).send(error)
    }
  },
   
  deleteProducts: async (req, res)=>{
    try {
      const {id}= req.params
      if(id){
       const deletee = await Products.findByIdAndDelete(id);
       res.json({msg:'Producto eliminado', deletee})
      }else{
       return res.status(404).send('No se puede completar la solicitud')
      }
    } catch (error) {
      return res.status(500).send(error)
    }
  },
  
    orderByPrice: async (req,res)=>{
      try {
        const {numero} = req.body
        if(numero){
        const query = await Products.find({
          price:{
            $lte: numero
          }
        })
        const map = query.map((p)=>{
          return{
            id: p._id,
            name: p.name,
            description: p.description,
            price: p.price,
            image: p.image,
            category: p.category.categories,
            count: p.count,
            color: p.color
          }
        })
        map.length ? res.status(200).send(map) :
        res.status(404).send("Producto no encontrado con esas especificaciones")
      }else{
     return res.status(404).send("Producto no encontrado con esas especificaciones")
      }
      } catch (error) {
        return res.status(500).send(error)
      }
    },

    orderByColor: async (req,res)=>{
      try {
        const {color}= req.body
        if(color){
          const query = await Products.find({
            color:{
                $eq: color
            }
          })
        const mapQuery = query.map((p)=>{
          return{
            id: p._id,
            name: p.name,
            description: p.description,
            price: p.price,
            image: p.image,
            category: p.category.categories,
            count: p.count,
            color: p.color
          }
        })
        mapQuery.length ? res.status(200).send(mapQuery) :
        res.status(404).send("Producto no encontrado con esas especificaciones")
        }else{
         res.send("Producto no encontrado con esas especificaciones")
        }
      } catch (error) {
        return res.status(500).send(error)
      }
    },

    orderByCategory: async (req,res)=>{
      try {
        const {type} = req.query
        if(type){
          const db = await Products.find({
            'category.categories':{
               $eq: type
            }
          })
          const mapQuery = db.map((p)=>{
            return{
              id: p._id,
              name: p.name,
              description: p.description,
              price: p.price,
              image: p.image,
              category: p.category.categories,
              count: p.count,
              color: p.color
            }
          })
          mapQuery.length ? res.status(200).send(mapQuery) :
          res.status(404).send("Producto no encontrado con esas especificaciones")
          }else{
           res.send("Producto no encontrado con esas especificaciones")
          }
        } catch (error) {
          return res.status(500).send(error)
        }
    },
}