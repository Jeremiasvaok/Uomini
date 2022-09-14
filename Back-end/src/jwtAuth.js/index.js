require('dotenv').config()
const { SECRET_TOKEN } = process.env
const jwt = require('jsonwebtoken');

const getToken = (payload) => {
    return jwt.sign({id: payload}, SECRET_TOKEN, { expiresIn: '365d' }) // crea un token e¿que espira en un año
}

//obtenos la data de un token 
const getTokenData = (token) => {
    let data = null  //el token principalmente esta en null porque no le pasamos nada ningun token
    jwt.verify(token, SECRET_TOKEN, (err, decoded) => { //verificamos el token que nos pasan si es verdaddero o si no hay token
        if(err) { // si hay un error envia un mensaje
            console.log('Error al obtener data del token')
        } 
        data = decoded // data ahora va a tener el decoded, que seria el token 
    })
    return data //retornamos la data que seria el token
}

module.exports = {
    getToken,
    getTokenData
}