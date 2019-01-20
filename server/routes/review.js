// var router = require('express').Router()
const express = require('express')
const db = require('../db/db')
const router = express.Router()
router.use(express.json())


router.get('/', (req, res) => {
    db.getAllships()
    .then(ships => 
        res.json(ships))
    })

router.get('/:id', (req,res) => {
    let id = req.params.id
    db.getShipFromId(id)
    .then (ships =>
        res.json(ships))
})

// router.put('/:id', (req, res) => {
//     let id = req.params.id
//     db.updateShipAv (id)
// })

module.exports = router