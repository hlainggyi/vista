// Controller
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

module.exports = (app) => {
  // For Partner
  // Partner Route
    /** name, position, nrc, company_id */
    app.get("/v1/partners", Ctrl.PartnerController.index)
    app.post("/v1/partners", Ctrl.PartnerController.post)
    app.get("/v1/partners/:partnerId", Ctrl.PartnerController.show)
    app.put("/v1/partners/:partnerId", Ctrl.PartnerController.put)
    app.delete("/v1/partners/:partnerId", Ctrl.PartnerController.remove)
}
