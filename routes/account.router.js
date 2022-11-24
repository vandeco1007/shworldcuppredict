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

const {
    getOption,
    createOption,
    deleteOption
} = require('../controllers/matchOption.controller')

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
    asyncHandller(authorization),
    getData
)
.delete(
    deleteData
)

router.route('/admin/matchoption')
.get(
    getOption
)
.post(
    createOption
)
.delete(
    deleteOption
)


module.exports = router