const express = require('express')
const router = express.Router()
const DashboardController = require('../controllers/dashboard')
const authMiddleware = require('../middlewares/auth')
const localeMiddleware = require('../middlewares/locale')

router.get('/demo-one/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.index)
router.get('/demo-two/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoTwo)
router.get('/demo-three/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoThree)
router.get('/demo-four/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoFour)
router.get('/demo-five/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoFive)
router.get('/demo-six/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoSix)
router.get('/demo-seven/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoSeven)
router.get('/demo-eight/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoEight)
router.get('/demo-nine/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoNine)
router.get('/demo-ten/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], DashboardController.demoTen)

module.exports = router