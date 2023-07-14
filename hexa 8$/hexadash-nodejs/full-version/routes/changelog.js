const express = require('express')
const router = express.Router()
const ChangelogController = require('../controllers/changelog')
const authMiddleware = require('../middlewares/auth')
const localeMiddleware = require('../middlewares/locale')

router.get('/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ChangelogController.index)

module.exports = router