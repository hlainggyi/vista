const Ctrl = require("../../controllers");
const Mid = require("../../middlewares");

// 1-isAuth
// 2-isRole

module.exports = (app) => {
  app.get("/v1/users", Ctrl.AuthController.index);
  app.post("/v1/login", Mid.crypto, Ctrl.AuthController.login);
  app.post(
    "/v1/dev-register",
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.AuthController.devRegister
  );
  app.post(
    "/v1/register",
    Mid.isAuth,
    Mid.crypto,
    Mid.isRole("admin"),
    Ctrl.AuthController.register
  );
  
  app.patch(
    "/v1/user-update", 
    Mid.isAuth, 
    Mid.crypto, 
    Mid.isRole("admin"), 
    Ctrl.AuthController.userUpdate
  );
  
  app.put(
    "/v1/change-password", 
    Mid.isAuth, 
    Mid.crypto, 
    Ctrl.AuthController.changePassword
  );

  app.get(
    "/v1/show-user", 
    Mid.isAuth, 
    Ctrl.AuthController.show
  );

  app.patch(
    "/v1/user-name-update", 
    Mid.isAuth, 
    Mid.crypto, 
    Ctrl.AuthController.userName
  );
};
