require('dotenv').config()
const {SECRET_TOKEN} = process.env
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const router = require('./routers/index')
const createRole = require('./controllers/role')
const passport = require('passport')
const { Passport } = require('passport')
require('./mongodb')
require('../src/middlewares/google')


const app = express()
createRole()
// app.use(passport.initialize())
// app.use(passport.session())

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({ //un espacio en memoria que podemos compartir en distinatas paginas 
//     secret: SECRET_TOKEN,
//     resave:false,
//     saveUninitialized: false
// })
app.use(cors())
//     origin:"http://localhost3001"
// }))

// function login(res, req, next){
//     req.user ? next() : res.res.sendStatus(401);
// }
// app.get('/', (req,res)=>{
//     res.send('<a href="/auth/google">autentificar</a>')
// })
// app.get('/google/callback',
// passport.authenticate('google',{
//     successRedirect: '/protect',
//     failureRedirect:'/error'
// })
// )
// app.get('/protect', login ,(req,res)=>{
//     res.send('<h1>joya</h1>')
// })
// app.get('/error', (req,res)=>{
//     res.send('<h1>error</h1>')
// })
// app.get('/auth/google',
//     passport.authenticate('google', {
//     scope: [
//         "https://www.googleapis.com/auth/userinfo.profile",
//         "https://www.googleapis.com/auth/userinfo.email",
//     ],
//     session:false
//     })
// )
app.use('/',router)

module.exports = app