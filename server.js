require('dotenv').config()
const express = require('express')
const server = express()



server.use(express.json())

const dataRouter = require('./model_data/dataRouter')
server.use('/api/data', dataRouter)

module.exports = server