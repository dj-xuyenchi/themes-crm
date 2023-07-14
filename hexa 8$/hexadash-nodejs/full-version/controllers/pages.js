// settings page
const settings = (request, response, next) => {
    response.render('../views/pages/setting/settings',{
        title:'Settings',
        name:'settings'
    })
}

// gallery one page
const galleryOne = (request, response, next) => {
    response.render('../views/pages/gallery/gallery_one',{
        title:'Gallery One',
        name:'gallery_one'
    })
}

// gallery two page
const galleryTwo = (request, response, next) => {
    response.render('../views/pages/gallery/gallery_two',{
        title:'Gallery Two',
        name:'gallery_two'
    })
}

// pricing page
const pricing = (request, response, next) => {
    response.render('../views/pages/pricing/pricing',{
        title:'Pricing',
        name:'pricing'
    })
}

// banner page
const banner = (request, response, next) => {
    response.render('../views/pages/banner/banner',{
        title:'Banner',
        name:'banner'
    })
}

// testimonial page
const testimonial = (request, response, next) => {
    response.render('../views/pages/testimonial/testimonial',{
        title:'Testimonial',
        name:'testimonial'
    })
}

// faq page
const faq = (request, response, next) => {
    response.render('../views/pages/faq/faq',{
        title:'FAQ',
        name:'faq'
    })
}

// search result page
const searchResult = (request, response, next) => {
    response.render('../views/pages/search/result',{
        title:'Search Result',
        name:'search_result'
    })
}

// blank page
const blank = (request, response, next) => {
    response.render('../views/pages/blank/blank',{
        title:'Blank',
        name:'blank'
    })
}

// knowledge base page
const base = (request, response, next) => {
    response.render('../views/pages/knowledge/base',{
        title:'Knowledge Base',
        name:'base'
    })
}

// knowledge base all articles page
const allArticles = (request, response, next) => {
    response.render('../views/pages/knowledge/all_articles',{
        title:'All Articles',
        name:'all_articles'
    })
}

// knowledge base single article page
const singleArticle = (request, response, next) => {
    response.render('../views/pages/knowledge/single_article',{
        title:'Single Article',
        name:'single_article'
    })
}

// support center page
const supportCenter = (request, response, next) => {
    response.render('../views/pages/support/center',{
        title:'Support Center',
        name:'support_center'
    })
}

// dynamic table page
const dynamicTable = (request, response, next) => {
    response.render('../views/pages/dtable/dynamic_table',{
        title:'Dynamic Table',
        name:'dynamic_table'
    })
}

// blog style one page
const blogOne = (request, response, next) => {
    response.render('../views/pages/blog/blog_one',{
        title:'Blog One',
        name:'blog_one'
    })
}

// blog style two page
const blogTwo = (request, response, next) => {
    response.render('../views/pages/blog/blog_two',{
        title:'Blog Two',
        name:'blog_two'
    })
}

// blog style three page
const blogThree = (request, response, next) => {
    response.render('../views/pages/blog/blog_three',{
        title:'Blog Three',
        name:'blog_three'
    })
}

// blog detail page
const blogDetail = (request, response, next) => {
    response.render('../views/pages/blog/detail',{
        title:'Blog Detail',
        name:'detail'
    })
}

// course list page
const courseList = (request, response, next) => {
    response.render('../views/pages/course/list',{
        title:'Course List',
        name:'course_list'
    })
}

// course detail page
const courseDetail = (request, response, next) => {
    response.render('../views/pages/course/detail',{
        title:'Course Detail',
        name:'course_detail'
    })
}

// terms and condition page
const termsAndCondition = (request, response, next) => {
    response.render('../views/pages/terms/term_condition',{
        title:'Terms & Condition',
        name:'term_condition'
    })
}

// maintenance page
const maintenance = (request, response, next) => {
    response.render('../views/pages/maintenance/maintenance',{
        title:'Maintenance',
        name:'maintenance'
    })
}

// 404 page
const notFound = (request, response, next) => {
    response.render('../views/pages/404/404',{
        title:'404',
        name:'not_found'
    })
}

// coming soon page
const comingSoon = (request, response, next) => {
    response.render('../views/pages/coming_soon/coming_soon',{
        title:'Coming Soon',
        name:'coming_soon'
    })
}

module.exports = {
    settings,
    galleryOne,
    galleryTwo,
    pricing,
    banner,
    testimonial,
    faq,
    searchResult,
    blank,
    base,
    allArticles,
    singleArticle,
    supportCenter,
    dynamicTable,
    blogOne,
    blogTwo,
    blogThree,
    blogDetail,
    courseList,
    courseDetail,
    termsAndCondition,
    maintenance,
    notFound,
    comingSoon
}