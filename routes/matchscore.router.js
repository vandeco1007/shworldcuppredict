const express = require('express')
const router = express.Router()
const {
    createRecord,
    readRecord
} = require('../controllers/matchscore.controller')

router.route('/')
.get(
    readRecord
)
.post(
    createRecord
)

module.exports = router