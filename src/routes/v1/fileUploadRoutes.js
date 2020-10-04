// Ctrl
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

const upload = Mid.upload;

module.exports = (app) => {

  app.get("/v1/files/:personId", Ctrl.FileUploadController.index);

  app.post("/v1/file-upload/:personId", upload.array("files"), Mid.isAuth, Ctrl.FileUploadController.post);
  app.put("/v1/file-upload", Mid.isAuth, Ctrl.FileUploadController.put);
  app.put("/v1/file-deleted", Mid.isAuth, Ctrl.FileUploadController.deleted);
};
