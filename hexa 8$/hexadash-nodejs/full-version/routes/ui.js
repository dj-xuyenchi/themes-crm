const express = require('express')
const router = express.Router()
const UIController = require('../controllers/ui')
const authMiddleware = require('../middlewares/auth')
const localeMiddleware = require('../middlewares/locale')

router.get('/alert/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.alert)
router.get('/avatar/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.avatar)
router.get('/badge/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.badge)
router.get('/breadcrumbs/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.breadcrumbs)
router.get('/buttons/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.buttons)
router.get('/cards/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.cards)
router.get('/carousel/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.carousel)
router.get('/checkbox/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.checkbox)
router.get('/collapse/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.collapse)
router.get('/comments/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.comments)
router.get('/dashboard-base/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.dashboardBase)
router.get('/datepicker/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.datepicker)
router.get('/drawer/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.drawer)
router.get('/drag-drop/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.dragDrop)
router.get('/dropdown/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.dropdown)
router.get('/empty/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.empty)
router.get('/grid/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.grid)
router.get('/input/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.input)
router.get('/list/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.list)
router.get('/menu/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.menu)
router.get('/message/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.message)
router.get('/modal/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.modal)
router.get('/notifications/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.notifications)
router.get('/page-header/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.pageHeader)
router.get('/pagination/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.pagination)
router.get('/progress/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.progress)
router.get('/radio/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.radio)
router.get('/rate/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.rate)
router.get('/result/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.result)
router.get('/select/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.select)
router.get('/skeleton/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.skeleton)
router.get('/slider/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.slider)
router.get('/spinner/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.spinner)
router.get('/statistics/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.statistics)
router.get('/steps/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.steps)
router.get('/switch/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.switchPage)
router.get('/tabs/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.tabs)
router.get('/tags/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.tags)
router.get('/timeline/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.timeline)
router.get('/timeline2/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.timeline2)
router.get('/timeline3/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.timeline3)
router.get('/timepicker/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.timepicker)
router.get('/upload/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], UIController.upload)

module.exports = router