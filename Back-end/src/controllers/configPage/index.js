const Page = require('../../models/configPage')

module.exports ={

    addConfig: async (req,res) =>{
        const {imageOne, imageTwo, imageTree} = req.body
        try{    
        const authorization = req.get('authorization')
        if(!authorization){
          return res.status(401).json({ msg: 'No tienes permiso para hacer esto'})
        }
        if(authorization.split()[0].toLowerCase() !== 'bearer'){
            return res.status(401).json({ msg: 'No tienes permiso para hacer esto'})
        }
        

        const addImage = new Page({
            imageOne, 
            imageTwo, 
            imageTree
        })
            addImage.save()
            .then(()=>{
                return res.json('ADD')
            })
        }catch(error){
            return res.status(500).send(error)
        }
    }
}