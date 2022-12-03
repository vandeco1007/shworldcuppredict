const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')
const asyncHandler = require('../middlewares/async.middleware')
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
    asyncHandler(auth),
    readRecord
)
.post(
    createRecord
)
.delete(
    asyncHandler(auth),
    deleteRecord
)

router.route('/findplayer')
.post(
    findPlayer
)

router.route('/getdate')
.post(
    asyncHandler(auth),
    readBydate
)

router.route('/del_date')
.delete(
    asyncHandler(auth),
    deleteByDate
)

module.exports = router