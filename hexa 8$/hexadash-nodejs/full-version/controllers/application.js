// email inbox page
const inbox = (request, response, next) => {
    response.render('../views/pages/email/inbox',{
        title:'Inbox',
        name:'inbox'
    })
}

// read email page
const readEmail = (request, response, next) => {
    response.render('../views/pages/email/read_email',{
        title:'Read Email',
        name:'read'
    })
}

// chat page
const chat = (request, response, next) => {
    response.render('../views/pages/chat/chat',{
        title:'Chat',
        name:'chat'
    })
}

// ecommerce products page
const products = (request, response, next) => {
    response.render('../views/pages/ecommerce/products',{
        title:'Products',
        name:'products'
    })
}

// ecommerce product List page
const productList = (request, response, next) => {
    response.render('../views/pages/ecommerce/product_list',{
        title:'Products',
        name:'product_list'
    })
}

// ecommerce product detail page
const productDetail = (request, response, next) => {
    response.render('../views/pages/ecommerce/product_detail',{
        title:'Product Detail',
        name:'product_detail'
    })
}

// ecommerce add new product page
const addProduct = (request, response, next) => {
    response.render('../views/pages/ecommerce/product_add',{
        title:'Add Product',
        name:'add_product'
    })
}

// ecommerce cart page
const cart = (request, response, next) => {
    response.render('../views/pages/ecommerce/cart',{
        title:'Cart',
        name:'cart'
    })
}

// ecommerce orders page
const orders = (request, response, next) => {
    response.render('../views/pages/ecommerce/orders',{
        title:'Orders',
        name:'orders'
    })
}

// ecommerce sellers page
const sellers = (request, response, next) => {
    response.render('../views/pages/ecommerce/sellers',{
        title:'Sellers',
        name:'sellers'
    })
}

// ecommerce invoices page
const invoices = (request, response, next) => {
    response.render('../views/pages/ecommerce/invoices',{
        title:'Invoices',
        name:'invoices'
    })
}

// project list page
const projects = (request, response, next) => {
    response.render('../views/pages/project/projects',{
        title:'Projects',
        name:'projects'
    })
}

// project table page
const projectTable = (request, response, next) => {
    response.render('../views/pages/project/projects_table',{
        title:'Projects',
        name:'projects_table'
    })
}

// project detail page
const projectDetail = (request, response, next) => {
    response.render('../views/pages/project/project_detail',{
        title:'Project Detail',
        name:'project_detail'
    })
}

// project create page
const projectCreate = (request, response, next) => {
    response.render('../views/pages/project/project_create',{
        title:'Project Create',
        name:'project_create'
    })
}

// calendar page
const calendar = (request, response, next) => {
    response.render('../views/pages/calendar/calendar',{
        title:'Calendar',
        name:'calendar'
    })
}

// user member list
const member = (request, response, next) => {
    response.render('../views/pages/user/member',{
        title:'User Member List',
        name:'member'
    })
}

// user member card list
const userGrid = (request, response, next) => {
    response.render('../views/pages/user/card',{
        title:'User Member Card',
        name:'user_card'
    })
}

// user list page
const userList = (request, response, next) => {
    response.render('../views/pages/user/list',{
        title:'User Member List',
        name:'user_list'
    })
}

// user member card 2 page
const userGrid2 = (request, response, next) => {
    response.render('../views/pages/user/card2',{
        title:'User Member Card2',
        name:'user_card2'
    })
}

// user group page
const userGroup = (request, response, next) => {
    response.render('../views/pages/user/group',{
        title:'User Group',
        name:'user_group'
    })
}

// user add page
const addUser = (request, response, next) => {
    response.render('../views/pages/user/add',{
        title:'User Add',
        name:'user_add'
    })
}

// user table page
const table = (request, response, next) => {
    response.render('../views/pages/user/table',{
        title:'User Table',
        name:'user_table'
    })
}

// contact grid page
const contactGrid = (request, response, next) => {
    response.render('../views/pages/contact/grid',{
        title:'Contact Grid',
        name:'contact_grid'
    })
}

// contact list page
const contactList = (request, response, next) => {
    response.render('../views/pages/contact/list',{
        title:'Contact List',
        name:'contact_list'
    })
}

// contact create page
const contactCreate = (request, response, next) => {
    response.render('../views/pages/contact/create',{
        title:'Contact Create',
        name:'contact_create'
    })
}

// note page
const note = (request, response, next) => {
    response.render('../views/pages/note/note',{
        title:'Note',
        name:'note'
    })
}
// todo page
const todo = (request, response, next) => {
    response.render('../views/pages/todo/todo',{
        title:'Todo',
        name:'todo'
    })
}

// kanban page
const kanban = (request, response, next) => {
    response.render('../views/pages/kanban/kanban',{
        title:'Kanban',
        name:'kanban'
    })
}

// import page
const imports = (request, response, next) => {
    response.render('../views/pages/import_export/import',{
        title:'Import',
        name:'import'
    })
}

// export page
const exportPage = (request, response, next) => {
    response.render('../views/pages/import_export/export',{
        title:'Export',
        name:'export'
    })
}

// export selected page
const exportSelected = (request, response, next) => {
    response.render('../views/pages/import_export/export_selected',{
        title:'Export Selected',
        name:'export_selected'
    })
}

// filemanager page
const filemanager = (request, response, next) => {
    response.render('../views/pages/filemanager/filemanager',{
        title:'Filemanager',
        name:'filemanager'
    })
}

// filemanager list page
const filemanagerList = (request, response, next) => {
    response.render('../views/pages/filemanager/filemanager_list',{
        title:'Filemanager List',
        name:'filemanager'
    })
}

// task app page
const task = (request, response, next) => {
    response.render('../views/pages/task/task',{
        title:'Task App',
        name:'task'
    })
}

// bookmark page
const bookmark = (request, response, next) => {
    response.render('../views/pages/bookmark/bookmark',{
        title:'Bookmark',
        name:'bookmark'
    })
}

// social profile page
const profile = (request, response, next) => {
    response.render('../views/pages/social/profile',{
        title:'Social Profile',
        name:'profile'
    })
}

// profile setting page
const profileSetting = (request, response, next) => {
    response.render('../views/pages/social/profile_setting',{
        title:'Profile Setting',
        name:'profile_setting'
    })
}

// support ticket page
const supportTicket = (request, response, next) => {
    response.render('../views/pages/support/ticket',{
        title:'Support Ticket',
        name:'support_ticket'
    })
}

// support detail page
const supportDetail = (request, response, next) => {
    response.render('../views/pages/support/detail',{
        title:'Support Detail',
        name:'support_detail'
    })
}

// support new ticke page
const newTicket = (request, response, next) => {
    response.render('../views/pages/support/new_ticket',{
        title:'Support New Ticket',
        name:'support_new_ticket'
    })
}

// job search page
const search = (request, response, next) => {
    response.render('../views/pages/job/search',{
        title:'Job Search',
        name:'job_search'
    })
}

// job search list page
const searchList = (request, response, next) => {
    response.render('../views/pages/job/search_list',{
        title:'Job Search List',
        name:'job_search_list'
    })
}

// job detail page
const jobDetail = (request, response, next) => {
    response.render('../views/pages/job/detail',{
        title:'Job Detail',
        name:'job_detail'
    })
}

// job apply page
const jobApply = (request, response, next) => {
    response.render('../views/pages/job/job_apply',{
        title:'Job Apply',
        name:'job_apply'
    })
}

module.exports = {
    inbox,
    readEmail,
    chat,
    products,
    productList,
    productDetail,
    addProduct,
    cart,
    orders,
    sellers,
    invoices,
    projects,
    projectTable,
    projectDetail,
    projectCreate,
    calendar,
    member,
    userGrid,
    userList,
    userGrid2,
    userGroup,
    addUser,
    table,
    contactGrid,
    contactList,
    note,
    todo,
    kanban,
    imports,
    exportPage,
    exportSelected,
    filemanager,
    filemanagerList,
    task,
    bookmark,
    profile,
    profileSetting,
    supportTicket,
    supportDetail,
    newTicket,
    search,
    searchList,
    jobDetail,
    jobApply,
    contactCreate
}