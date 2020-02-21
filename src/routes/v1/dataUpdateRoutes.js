// Ctrl
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

module.exports = (app) => {
  //    For nrc
  app.get("/v1/nrc-lists", Mid.isAuth, Ctrl.NrcController.index);
  app.post("/v1/nrc-lists", Mid.isAuth, Ctrl.NrcController.post);
  app.put("/v1/nrc-lists", Mid.isAuth, Ctrl.NrcController.put);

  //    For Data
  app.get("/v1/update-data", Mid.isAuth, Ctrl.UpdateDataController.index);
  app.post("/v1/update-data", Mid.isAuth, Ctrl.UpdateDataController.post);
  app.put("/v1/update-data", Mid.isAuth, Ctrl.UpdateDataController.put);

  //    For Edu
  app.get("/v1/edus", Mid.isAuth, Ctrl.EduController.index);
  app.get("/v1/edus-list", Mid.isAuth, Ctrl.EduController.list);
  app.post("/v1/edus", Mid.isAuth, Ctrl.EduController.post);
  app.put("/v1/edus", Mid.isAuth, Ctrl.EduController.put);

  //    For Degree
  app.get("/v1/degrees", Mid.isAuth, Ctrl.DegreeController.index);
  app.get("/v1/degrees-list", Mid.isAuth, Ctrl.DegreeController.list);
  app.post("/v1/degrees", Mid.isAuth, Ctrl.DegreeController.post);
  app.put("/v1/degrees", Mid.isAuth, Ctrl.DegreeController.put);

  //    For Major
  app.get("/v1/majors", Mid.isAuth, Ctrl.MajorController.index);
  app.get("/v1/majors-list", Mid.isAuth, Ctrl.MajorController.list);
  app.post("/v1/majors", Mid.isAuth, Ctrl.MajorController.post);
  app.put("/v1/majors", Mid.isAuth, Ctrl.MajorController.put);
};
