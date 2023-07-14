// set locale though middleware
const localized = (request, response, next) => {
    if(request.params.language){
        request.setLocale(request.params.language)
    }
    next()
}

// store active locale globally
const activeLocale = (request, response, next) => {
    response.locals.locale = response.getLocale()
    next()
}

// expose current route without locale
const currentRoute = (request, response, next) => {
    response.locals.currentRoute = request.originalUrl.split('/').slice(0,-1).join('/').toString()
    next()
}

module.exports = {
    localized,
    activeLocale,
    currentRoute
}