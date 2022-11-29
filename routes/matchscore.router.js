const express = require('express')
const router = express.Router()
const {
    createRecord,
    readRecord,
    findPlayer,
    readBydate,
    deleteRecord,
    deleteByDate
} = require('../controllers/matchscore.controller')

router.route('/')
.get(
    readRecord
)
.post(
    createRecord
)
.delete(
    deleteRecord
)

router.route('/findplayer')
.post(
    findPlayer
)

router.route('/getdate')
.post(
    readBydate
)

router.route('/del_date')
.delete(
    deleteByDate
)

module.exports = router