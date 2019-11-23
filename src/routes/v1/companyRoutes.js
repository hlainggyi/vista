const Ctrl = require("../../controllers")
const Mid = require("../../middlewares")

module.exports = (app) => {
    app.get('/v1/companies', Ctrl.CompanyController.index)
    app.post('/v1/companies', Ctrl.CompanyController.post)
    app.get('/v1/companies/show', Ctrl.CompanyController.show)

}