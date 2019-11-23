const app = require("../app")

// Register Routes
require("./v1/authRoutes")(app)
require("./v1/roleRoutes")(app)
require("./v1/companyRoutes")(app)
require("./v1/personRoutes")(app)
// require("./v1/teacherRoutes")(app)

// View Routes List
app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(r.route.path)
    //   console.log("Successful Connection !");
    }
  })