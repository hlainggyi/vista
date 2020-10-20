// Controller
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

module.exports = (app) => {
  // For Partner
  // Partner Route
  /** name, position, nrc, company_id */
  app.get(
    "/v1/partners", 
    Mid.isAuth, 
    Ctrl.PartnerController.index
  );
  app.post(
    "/v1/partners",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.PartnerController.post
  );
  app.get(
    "/v1/partners-show/:partner",
    Mid.isAuth,
    Ctrl.PartnerController.show
  );
  app.put(
    "/v1/partners",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.PartnerController.put
  );
  app.delete(
    "/v1/partners/:partnerId",
    Mid.isAuth,
    Ctrl.PartnerController.remove
  );
};
