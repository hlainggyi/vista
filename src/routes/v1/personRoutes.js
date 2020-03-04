// Ctrl
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

const upload = Ctrl.ImageUpload;

const uploadImage = Mid.uploadImage;

const uploadImageGallery = Mid.uploadImageGallery;

module.exports = (app) => {
  // For Person
  // Person Route
  /** name, position, nrc, company_id */
  app.get("/v1/persons", Ctrl.PersonController.index);
  // app.post('/v1/persons', Mid.isAuth, Ctrl.PersonController.post)
  app.post(
    "/v1/persons",
    Mid.isAuth,
    Mid.isRole("admin"),
    uploadImage,
    Ctrl.PersonController.post
  );
  // app.post('/v1/persons', Mid.isAuth, upload.single('image'), Ctrl.PersonController.post)
  app.get("/v1/persons/:personId", Ctrl.PersonController.show);
  app.put(
    "/v1/persons",
    Mid.isAuth,
    Mid.isRole("admin"),
    uploadImage,
    Ctrl.PersonController.put
  );

  app.delete(
    "/v1/persons/:personId",
    Mid.isRole("admin"),
    Ctrl.PersonController.remove
  );

  // For Home
  app.get("/v1/persons-resume", Ctrl.PersonController.resume);
};
