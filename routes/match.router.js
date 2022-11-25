const express = require('express')
const router = express.Router()
const {
    getMatch
} = require('../controllers/matchbydate.controller')

router.route('/')
.get(
    getMatch
)

module.exports = router