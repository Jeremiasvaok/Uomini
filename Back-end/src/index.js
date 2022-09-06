const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./routers/index')
require('./mongodb')
const createRole = require('./controllers/role')

const app = express()
createRole()

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost3000"
}))
app.use('/',router)

module.exports = app