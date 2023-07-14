const express = require('express')
const router = express.Router()
const PageController = require('../controllers/pages')
const authMiddleware = require('../middlewares/auth')
const localeMiddleware = require('../middlewares/locale')

router.get('/settings/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.settings)

router.get('/gallery/one/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.galleryOne)
router.get('/gallery/two/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.galleryTwo)

router.get('/pricing/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.pricing)

router.get('/banner/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.banner)

router.get('/testimonial/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.testimonial)

router.get('/faq/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.faq)

router.get('/search-result/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.searchResult)

router.get('/blank/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.blank)

router.get('/knowledge/base/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.base)
router.get('/knowledge/all-articles/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.allArticles)
router.get('/knowledge/single-article/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.singleArticle)

router.get('/support-center/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.supportCenter)

router.get('/dynamic-table/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.dynamicTable)

router.get('/blog/one/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.blogOne)
router.get('/blog/two/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.blogTwo)
router.get('/blog/three/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.blogThree)
router.get('/blog/detail/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.blogDetail)

router.get('/course/list/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.courseList)
router.get('/course/detail/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.courseDetail)

router.get('/terms-condition/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.termsAndCondition)

router.get('/maintenance/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.maintenance)

router.get('/404/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.notFound)

router.get('/coming-soon/:language(en|gr|ar)', [localeMiddleware.localized, authMiddleware.isAuthenticated], PageController.comingSoon)

module.exports = router