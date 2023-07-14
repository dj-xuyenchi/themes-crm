const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/auth')
const authMiddleware = require('../middlewares/auth')

router.get('/register', authMiddleware.isGuest, AuthController.register)
router.post('/register', authMiddleware.isGuest, AuthController.signup)
router.get('/', authMiddleware.isGuest, AuthController.login)
router.post('/authenticate', authMiddleware.isGuest, AuthController.authenticate)
router.post('/logout', authMiddleware.isAuthenticated, AuthController.signOut)
router.get('/reset-password', authMiddleware.isGuest, AuthController.passwordReset)

module.exports = router