const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const morgan = require("morgan")


const app = express()

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors())
app.use(morgan('dev'))
// app.use(morgan('combined'))


// require("./routes/v1/authRoutes")(app)
// require("./routes/v1/schoolRoutes")(app)


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });
  
//   // restful api error handler
//   app.use(function(err, req, res, next) {
//     console.log(err)
//     if (req.app.get("env") !== "dev") {
//       delete err.stack
//     }
//     res.status(err.statusCode || 500).json(err)
//   });
  

app._router.stack.forEach(function(r){
    if (r.route && r.route.path){
      console.log(r.route.path)
    //   console.log("Successful Connection !");
    }
  })

module.exports = app