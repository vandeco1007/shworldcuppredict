const express = require('express')
const router = express.Router()
const {
    getMatchByDate,
    getAllMatches,
} = require('../controllers/matches.controller')

router.route('/')
.post(
    getMatchByDate
)
.get(
    getAllMatches
)

module.exports = router