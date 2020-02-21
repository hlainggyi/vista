const app = require("../app");

// Register Routes
require("./v1/authRoutes")(app);
require("./v1/roleRoutes")(app);
require("./v1/companyRoutes")(app);
require("./v1/personRoutes")(app);
require("./v1/dataUpdateRoutes")(app);
require("./v1/partnerRoutes")(app);
require("./v1/interviewRoutes")(app);

// View Routes List
app._router.stack.forEach(function(r) {
  if (r.route && r.route.path) {
    console.log(r.route.path);
    //   console.log("Successful Connection !");
  }
});

// http://52.221.208.158/v1/login

// http://52.221.208.158/v1/roles

// http://52.221.208.158/v1/users
