const express = require('express')
const asyncHandller = require('../middlewares/async.middleware')
const authorization = require('../middlewares/auth.middleware')
const {
    getAllAccount,
    signup,
    login
} = require('../controllers/account.controller')

const {
    getData,
    deleteData
} = require('../controllers/data.controller')


const router = express.Router()

router.route('/')
.get(
    getAllAccount
)

router.route('/signup')
.post(
    signup
)

router.route('/login')
.post(
    login
)

router.route('/admin/data')
.get(
    // asyncHandller(authorization),
    getData
)
.delete(
    deleteData
)



module.exports = router