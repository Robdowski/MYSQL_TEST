const router = require('express').Router()
const knex = require('./model')

router.get('/', (req, res) => {
    knex.getData()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({Error: "There was a problem getting the data."})
    })
})

module.exports = router