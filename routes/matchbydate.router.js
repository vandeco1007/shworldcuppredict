const express = require('express')
const router = express.Router()
const {
    callMatch
} = require('../controllers/matchbydate.controller')

router.route('/')
.get(
    callMatch
)

module.exports = router