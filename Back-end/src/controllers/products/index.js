const Products = require('../../models/product/product')
const User = require('../../models/user/user')
const { getTokenData} = require('../../jwtAuth.js')
const { SECRET_TOKEN } = process.env

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
    const { name, description, price, image, category, count, color } = req.body

    const autorization = req.get('authorization')
    if (!autorization) {
      return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }
    if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {// bearer zxaUHUHU. este if esta verificando que exista el bearer
      return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }
    const token = autorization.substring(7)//esta costante va a contener el token, el token principalmente es asi bearer jdsiijyVGVG, Y CON EL SUBSTRING(7) saca a bearer y deja el token solo
    const data = getTokenData(token) // le mandatmos a la funcion getTokenData el token que nos pasaron eso nos va a responder con la data o un error 
    //console.log(data)
    if (!data) { 
      return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }
    const user = await User.findById(data.id) //si nos manda un token no valido  hacemos una verificacion si existe algun usuario con el id 
    if(!user) {
      return res.status(404).json({ message: 'No se ha encontrado usuario' })
    }



    if (!name) {
      return res.status(404).send('Falta información, el NOMBRE esta incompleta')
    }
    else if (!description) {
      return res.status(404).send('Falta información, la DESCRIPCION esta incompleta')
    }
    else if (!price) {
      return res.status(404).send('Falta información, el PRECIO esta incompleta')
    }
    else if (!image) {
      return res.status(404).send('Falta información, la IMAGEN esta incompleta')
    }
    else if (!category) {
      return res.status(404).send('Falta información, la CATEGORIA esta incompleta')
    }
    else if (!count) {
      return res.status(404).send('Falta información, la CANTIDAD esta incompleta')
    }
    else if (!color) {
      return res.status(404).send('Falta información, los COLORES esta incompleta')
    }
    else {
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
        .then(() => {
          return res.status(201).json({ msg: 'Producto creado', product })
        })
        .catch((error) => {
          return res.status(500).send(error)
        })
    }
  },

  updateProduct: async (req,res)=>{
    try {
      const {name, description, price, image, category, count, color} = req.body
      const {id} = req.params
    
      const authorization = req.get('authorization')
      if(!authorization){
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }
      if(authorization.split(' ')[1].toLowerCase() !== 'bearer'){
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }
      const token = authorization.substring(7)
      let data = getTokenData(token)
      if(!data){
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }
      const userToken = await User.findById(data.id)
      if(!userToken){
        return res.status(404).json({ message: 'No se ha encontrado usuario' })
      }



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
      
      const authorization = req.get('authorization')
      if(!authorization){
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }
      if(authorization.split(' ')[0].toLowerCase() !== "bearer"){
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }
      let token = authorization.split(' ')[1]
      let data = getTokenData(token)
      if(!data){
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }
      const userToken = await User.findById(data.id)
      if(!userToken){
        return res.status(404).json({ message: 'No se ha encontrado usuario' })
      }

      
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