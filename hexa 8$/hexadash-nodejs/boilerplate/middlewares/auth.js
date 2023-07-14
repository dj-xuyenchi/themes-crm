// check if the user is authenticated
const isAuthenticated = (request, response, next) => {
    if(!request.session.user){
        return response.redirect(response.locals.base)
    }
    next()
}

// check if the user is guest
const isGuest = (request, response, next) => {
    if(request.session.user){
        return response.redirect(response.locals.base + 'dashboard/demo-one/' + response.getLocale())
    }
    next()
}

module.exports = {
    isAuthenticated,
    isGuest
}