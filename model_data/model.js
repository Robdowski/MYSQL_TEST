const db = require('../data/dbconfig')

const getData = () => {
   return db.select('*').from('platform_sessions')
    .where('data')
}


module.exports = { getData }