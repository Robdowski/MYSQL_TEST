require('dotenv').config()
const express = require('express')
const server = express()
const graphqlHTTP = require('express-graphql');
const cors = require("cors");

const dataRouter = require('./model_data/dataRouter')

const schema = require("./schema");
const { getLanceData, getTraderUsers } = require("./queries");


const root = {
    tradersData: getLanceData,
    tradersUsers: getTraderUsers
}

server.use(express.json())
server.use(cors());

server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));


server.use('/api/data', dataRouter)

module.exports = server

