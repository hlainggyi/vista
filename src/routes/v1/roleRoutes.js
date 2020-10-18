const Ctrl = require("../../controllers")
const Mid = require("../../middlewares")

module.exports = (app) => {
    app.get("/v1/roles", Mid.isAuth, Mid.isRole('admin', 'developer'), Ctrl.RoleController.index)
    app.get("/v1/dev-roles", Mid.isAuth, Mid.isRole('developer'), Ctrl.RoleController.devroles)
    app.post("/v1/roles", Mid.isAuth, Mid.isRole('admin', 'developer'), Ctrl.RoleController.post)
}