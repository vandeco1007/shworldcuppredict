const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth.middleware')
const asyncHandler = require('../middlewares/async.middleware')
const {
    getMatchByDate,
    getAllMatches,
    createMatch
} = require('../controllers/matches.controller')

router.route('/')
.post(
    asyncHandler(auth),
    createMatch
)
.get(
    getAllMatches
)

router.route('/getmatchbydate')
.post(
    getMatchByDate
)

module.exports = router