// Ctrl
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");


module.exports = (app) => {
  // For Person
  // Person Route
  /** name, position, nrc, company_id */
  app.get("/v1/persons", Mid.isAuth, Ctrl.PersonController.index);
  // app.post('/v1/persons', Mid.isAuth, Ctrl.PersonController.post)
  app.post(
    "/v1/persons",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin", "editor"),
    Ctrl.PersonController.post
  );

  app.get("/v1/persons/:personId", Ctrl.PersonController.show);
  app.put(
    "/v1/persons",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin", "editor"),
    Ctrl.PersonController.put
  );

  app.delete(
    "/v1/persons/:personId",
    Mid.isRole("admin"),
    Ctrl.PersonController.remove
  );

  // For Home
  app.get("/v1/persons-resume", Ctrl.PersonController.resume);

  //    For Japanese Language
  // app.get("/v1/nations", Mid.isAuth, Ctrl.JapaneseLanguageController.index);
  // app.get("/v1/nations-list", Mid.isAuth, Ctrl.JapaneseLanguageController.list);
  app.post(
    "/v1/japaneselanguages",
    Mid.isAuth,
    Mid.isRole("admin"),
    Ctrl.JapaneseLanguageController.post
  );
  app.put(
    "/v1/japaneselanguages",
    Mid.isAuth,
    Mid.isRole("admin"),
    Ctrl.JapaneseLanguageController.put
  );
};
