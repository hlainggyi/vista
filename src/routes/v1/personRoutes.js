// Ctrl
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

module.exports = (app) => {
  // For Person
  // Person Route
    /** name, position, nrc, company_id */
    // app.get("/v1/persons", Ctrl.PersonController.index)
    // app.post("/v1/persons", Ctrl.PersonController.post)
    // app.get("/v1/persons/:personId", Ctrl.PersonController.show)
    // app.put("/v1/persons/:personId", Ctrl.PersonController.put)
    // app.delete("/v1/persons/:personId", Ctrl.PersonController.remove)


    // Education Route
    app.get('/v1/educations', Ctrl.EducationController.index)
    app.post('/v1/educations', Ctrl.EducationController.post)
    
    // Caterogy Route 
    app.get('/v1/categories', Ctrl.CategoryController.index)
    app.get('/v1/categories-name/:name', Ctrl.CategoryController.getCategoryName)
    app.post('/v1/categories', Ctrl.CategoryController.post)

}
