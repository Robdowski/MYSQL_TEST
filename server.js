require('dotenv').config()
const express = require('express')
const server = express()

const cors = require('cors')
const graphQLHTTP = require('express-graphql')

const schema = require('./schema')
const { getLanceData, getTraderUsers } = require('./requests')

const root = {
    tradersData: getLanceData,
    tradersUsers: getTraderUsers
}

server.use(cors())

server.use('/graphql', graphQLHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))


const dataRouter = require('./model_data/dataRouter')
server.use('/api/data', dataRouter)

module.exports = server