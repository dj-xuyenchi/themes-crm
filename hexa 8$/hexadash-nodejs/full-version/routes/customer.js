const express = require('express')
const router = express.Router()
const CustomerController = require('../controllers/customer')
const authMiddleware = require('../middlewares/auth')
const localeMiddleware = require('../middlewares/locale')

router.get('/view-all/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], CustomerController.customers)
router.get('/create/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], CustomerController.create)
router.post('/create/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], CustomerController.store)
router.get('/edit/:id/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], CustomerController.edit)
router.post('/update/:id/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], CustomerController.update)
router.post('/delete/:id/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], CustomerController.remove)

module.exports = router