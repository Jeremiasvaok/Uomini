const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routers/index')
require('./mongodb')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/',router)

module.exports = app