// Ctrl
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

module.exports = (app) => {
  //    For nrc
  app.get("/v1/nrc-lists", Mid.isAuth, Ctrl.NrcController.index);
  app.post(
    "/v1/nrc-lists",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.NrcController.post
  );
  app.put(
    "/v1/nrc-lists",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.NrcController.put
  );

  //    For Data
  app.get("/v1/update-data", Mid.isAuth, Ctrl.UpdateDataController.index);
  app.post(
    "/v1/update-data",
    Mid.isAuth,
    Mid.isRole("admin"),
    Ctrl.UpdateDataController.post
  );
  app.put(
    "/v1/update-data",
    Mid.isAuth,
    Mid.isRole("admin"),
    Ctrl.UpdateDataController.put
  );

  //    For Edu
  app.get("/v1/edus", Mid.isAuth, Ctrl.EduController.index);
  app.get("/v1/edus-list", Mid.isAuth, Ctrl.EduController.list);
  app.post(
    "/v1/edus",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.EduController.post
  );
  app.put("/v1/edus", Mid.isAuth, Mid.crypto, Mid.isRole("admin"), Ctrl.EduController.put);

  //    For Degree
  app.get("/v1/degrees", Mid.isAuth, Ctrl.DegreeController.index);
  app.get("/v1/degrees-list", Mid.isAuth, Ctrl.DegreeController.list);
  app.post(
    "/v1/degrees",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.DegreeController.post
  );
  app.put(
    "/v1/degrees",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.DegreeController.put
  );

  //    For Major
  app.get("/v1/majors", Mid.isAuth, Ctrl.MajorController.index);
  app.get("/v1/majors-list", Mid.isAuth, Ctrl.MajorController.list);
  app.post(
    "/v1/majors",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.MajorController.post
  );
  app.put(
    "/v1/majors",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.MajorController.put
  );

  //    For Family
  app.get("/v1/families", Mid.isAuth, Ctrl.FamilyController.index);
  app.get("/v1/families-list", Mid.isAuth, Ctrl.FamilyController.list);
  app.post(
    "/v1/families",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.FamilyController.post
  );
  app.put(
    "/v1/families",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.FamilyController.put
  );

  //    For Nation
  app.get("/v1/nations", Mid.isAuth, Ctrl.NationController.index);
  app.get("/v1/nations-list", Mid.isAuth, Ctrl.NationController.list);
  app.post(
    "/v1/nations",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.NationController.post
  );
  app.put(
    "/v1/nations",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.NationController.put
  );

  //    For Priority
  app.get("/v1/priorities", Mid.isAuth, Ctrl.PriorityController.index);
  app.get("/v1/priorities-list", Mid.isAuth, Ctrl.PriorityController.list);
  app.post(
    "/v1/priorities",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.PriorityController.post
  );
  app.put(
    "/v1/priorities",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.PriorityController.put
  );
};
