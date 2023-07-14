const express = require('express')
const router = express.Router()
const ApplicationController = require('../controllers/application')
const authMiddleware = require('../middlewares/auth')
const localeMiddleware = require('../middlewares/locale')


router.get('/email/inbox/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.inbox)
router.get('/email/read/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.readEmail)

router.get('/chat/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.chat)

router.get('/ecommerce/products/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.products)
router.get('/ecommerce/product-list/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.productList)
router.get('/ecommerce/product-detail/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.productDetail)
router.get('/ecommerce/add-product/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.addProduct)
router.get('/ecommerce/cart/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.cart)
router.get('/ecommerce/orders/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.orders)
router.get('/ecommerce/sellers/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.sellers)
router.get('/ecommerce/invoices/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.invoices)

router.get('/project/list/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.projects)
router.get('/project/table/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.projectTable)
router.get('/project/detail/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.projectDetail)
router.get('/project/create/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.projectCreate)

router.get('/calendar/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.calendar)

router.get('/user/member/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.member)
router.get('/user/grid/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.userGrid)
router.get('/user/list/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.userList)
router.get('/user/grid2/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.userGrid2)
router.get('/user/group/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.userGroup)
router.get('/user/add/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.addUser)
router.get('/user/table/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.table)

router.get('/contact/grid/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.contactGrid)
router.get('/contact/list/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.contactList)
router.get('/contact/create/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.contactCreate)

router.get('/note/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.note)

router.get('/todo/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.todo)

router.get('/kanban/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.kanban)

router.get('/import/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.imports)
router.get('/export/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.exportPage)
router.get('/export-selected/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.exportSelected)

router.get('/filemanager/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.filemanager)
router.get('/filemanager-list/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.filemanagerList)

router.get('/task/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.task)

router.get('/bookmark/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.bookmark)

router.get('/social/profile/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.profile)
router.get('/social/profile-setting/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.profileSetting)

router.get('/support/ticket/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.supportTicket)
router.get('/support/detail/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.supportDetail)
router.get('/support/new-ticket/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.newTicket)

router.get('/job/search/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.search)
router.get('/job/search/list/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.searchList)
router.get('/job/detail/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.jobDetail)
router.get('/job/apply/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], ApplicationController.jobApply)

module.exports = router