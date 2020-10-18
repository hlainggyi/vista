
const app = require("../app");
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);


fs.readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) !== '.js');
  })
  .forEach((version) => {
    const directoryPath = path.join(__dirname, version);
    fs.readdirSync(directoryPath)
      .forEach((file) => {
        var filename = file.split('.')[0];
        require(`./${version}/${filename}`)(app)
      });
  });

// View Routes List
app._router.stack.forEach(function (r) {
  if (r.route && r.route.path) {
    console.log(r.route.path);
    // console.log("Successful Connection !");
  }
});



// const app = require("../app");

// // Register Routes
// require("./v1/authRoutes")(app);
// require("./v1/roleRoutes")(app);
// require("./v1/companyRoutes")(app);
// require("./v1/personRoutes")(app);
// require("./v1/dataUpdateRoutes")(app);
// require("./v1/partnerRoutes")(app);
// require("./v1/interviewRoutes")(app);
// require("./v1/fileUploadRoutes")(app);
