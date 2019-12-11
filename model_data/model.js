const db = require('../data/dbconfig')

const getData = () => {
   return db.select('*').from('platform_sessions').limit(50)
}

const getUsers = () => {
   return db('users')
}

const getUsersBy = args => {
   return db('users').whereNotNull(args)
}


module.exports = { getData, getUsers, getUsersBy }