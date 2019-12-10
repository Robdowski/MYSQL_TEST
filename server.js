require('dotenv').config()
const express = require('express')
const server = express()
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const dataRouter = require('./model_data/dataRouter')
const data = require("./model_data/model")

const schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
        tradersData(request_value: String): [SautiTrader]
    }

    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
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
`);


const getLanceData = async args => {
    const lanceData = await data.getData();

    if (args.request_value) {
        const { request_value } = args;
        return lanceData.filter(trader => trader.request_value === request_value)
    } else return lanceData;
}

const getCourse = args => {
    const { id } = args;
    return coursesData.filter(course => course.id === id)[0];
}

const getCourses = args => {
    console.log('this was hit!')
    if (args.topic) {
        const { topic } = args;
        return coursesData.filter(course => course.topic === topic);
    } else return coursesData;
}

const updateCourseTopic = ({ id, topic }) => {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    })

    return coursesData.filter(course => course.id === id)[0];
}

const root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic,
    tradersData: getLanceData
}

server.use(express.json())

server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));


server.use('/api/data', dataRouter)

module.exports = server

const coursesData = [
    {
        id: 1,
        title: "Title One", 
        author: "Bobby",
        description: "Do stuff",
        topic: "Tech Stuff",
        url: "Theurl.com"
    },
    {
        id: 2,
        title: "Title Two", 
        author: "Susan",
        description: "Do More stuff",
        topic: "Tech Stuff",
        url: "Theurlforplaying.com"
    },
    {
        id: 3,
        title: "Title Three", 
        author: "Henry",
        description: "Do more stuff again?",
        topic: "Crazy Stuff",
        url: "Thecrazyurl.com"
    }
]