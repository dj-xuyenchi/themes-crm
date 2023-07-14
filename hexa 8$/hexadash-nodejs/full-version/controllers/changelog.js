// show changelog page
const index = (request, response, next) => {
    response.render('../views/pages/changelog/changelog',{
        title:'Changelog',
        name:'changelog'
    })
}

module.exports = { index }