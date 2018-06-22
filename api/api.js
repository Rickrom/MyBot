var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    let queue = require('../app')
    res.json(queue)
})

module.exports = router