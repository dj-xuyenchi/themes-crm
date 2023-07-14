// blank page
const blank = (request, response, next) => {
    response.render('../views/pages/blank/blank',{
        title:'Blank',
        name:'blank'
    })
}

module.exports = {   
    blank
}