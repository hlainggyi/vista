// Controller
const Ctrl = require("../../controllers");

// Policy
const Mid = require("../../middlewares");

module.exports = (app) => {
  // For Partner
  // Partner Route
  /** name, position, nrc, company_id */
  app.get("/v1/interviews", Mid.isAuth, Ctrl.InterviewController.index);
  app.get(
    "/v1/interview-persons",
    Mid.isAuth,
    Ctrl.InterviewController.persons
  );
  app.post("/v1/interviews", Mid.isAuth, Ctrl.InterviewController.post);
  app.put("/v1/interviews", Mid.isAuth, Ctrl.InterviewController.put);
  app.get(
    "/v1/interviews-show/:interview",
    Mid.isAuth,
    Ctrl.InterviewController.show
  );
  // app.get(
  //   "/v1/interviews-show/:interview",
  //   Mid.isAuth,
  //   Ctrl.InterviewController.show
  // );
  // app.put("/v1/interviews", Mid.isAuth, Ctrl.InterviewController.put);
  // app.delete(
  //   "/v1/interviews/:interviewId",
  //   Mid.isAuth,
  //   Ctrl.InterviewController.remove
  // );
};
