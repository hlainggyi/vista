const Ctrl = require("../../controllers");
const Mid = require("../../middlewares");

module.exports = (app) => {
  app.get("/v1/companies", Ctrl.CompanyController.index);
  // app.post("/v1/companies", Mid.isAuth, Ctrl.CompanyController.post);
  app.put("/v1/companies", Mid.isAuth, Ctrl.CompanyController.put);
  app.get("/v1/companies-show", Mid.isAuth, Ctrl.CompanyController.show);
};
