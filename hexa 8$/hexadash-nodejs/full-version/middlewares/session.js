// make session globally accessible
const globalSession = (request, response, next) => {
    response.locals.session = request.session.user ? request.session.user : ''
    next()
}

// global error message
const errorMessage = (request, response, next) => {
    response.locals.errorMessage = request.session.errorMessage
    delete request.session.errorMessage
    next()
 }

module.exports = {
    globalSession,
    errorMessage
}