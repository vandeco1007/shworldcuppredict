const express = require('express')
const router = express.Router()
const data = require('../controllers/data.controller')

router.route('/')
.get(
    data
)

module.exports = router