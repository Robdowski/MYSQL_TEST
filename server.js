require('dotenv').config()
const express = require('express')
const server = express()
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require("cors");

const dataRouter = require('./model_data/dataRouter')
const data = require("./model_data/model")

const schema = buildSchema(`
    type Query {
        tradersData(request_value: String): [SautiTrader]
        tradersUsers(gender: String, age: String): [User]
    }

    type SautiTrader {
        sess_id: Int
        cell_num: String
        created_date: String
        udate: String
        platform_id: String
        notes: String
        request_value: String
        request_type: String
    }

    type User { 
        id: Int
        gender: String
        age: String
        education: String
        crossing_freq: String
        produce: String
        language: String
        country_of_residence: String
    }
`);


const getLanceData = async args => {
    const lanceData = await data.getData();

    if (args.request_value) {
        const { request_value } = args;
        return lanceData.filter(trader => trader.request_value === request_value)
    } else return lanceData;
}

const getTraderUsers = async args => {
    let filtered = [];
    const traderUsers = await data.getUsers();

    if (args.gender) {
        const { gender } = args;
        filtered = traderUsers.filter(trader => trader.gender === gender)
    }
    
    if (args.age) {
        const { age } = args;
        filtered = filtered.filter(trader => trader.age === age)
    };

    return  filtered;
}

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

