require('dotenv').config()
const {SECRET_TOKEN} = process.env
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const router = require('./routers/index')
require('./mongodb')
const createRole = require('./controllers/role')
const passport = require('passport')
const app = express()
createRole()

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ //un espacio en memoria que podemos compartir en distinatas paginas 
    secret: SECRET_TOKEN,
    resave:false,
    saveUninitialized: false
}))
app.use(cors({
    origin:"http://localhost3000"
}))
app.use(passport.initialize())

app.use('/',router)

module.exports = app