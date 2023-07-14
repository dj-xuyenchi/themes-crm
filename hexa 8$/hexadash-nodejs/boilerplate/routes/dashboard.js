const express = require('express')
const router = express.Router()
const PageController = require('../controllers/pages')
const authMiddleware = require('../middlewares/auth')
const localeMiddleware = require('../middlewares/locale')

router.get('/demo-one/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.blank);

module.exports = router