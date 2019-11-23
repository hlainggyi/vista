const Ctrl = require("../../controllers")
// const Mid = require("../../middlewares")

// 1-isAuth 
// 2-isRole


module.exports = (app) => {
    app.get('/v1/users', Ctrl.AuthController.index)
    app.post('/v1/login', Ctrl.AuthController.login)
    app.post('/v1/dev-register', Ctrl.AuthController.devRegister)
    app.post('/v1/register', Ctrl.AuthController.register)
}