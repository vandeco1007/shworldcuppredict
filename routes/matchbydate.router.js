const express = require('express')
const router = express.Router()
const match = require('../controllers/matchbydate.controller')

router.route('/')
.post(
    match
)

module.exports = router