const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', usersCtrl.create)
router.post('/log-in', usersCtrl.logIn)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)
router.get('/homepage', usersCtrl.show)



module.exports = router