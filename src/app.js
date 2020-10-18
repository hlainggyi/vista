const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("./backup/cron");
// const path = require("path")
const app = express();

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }, { limit: '50mb' }));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan("dev"));

module.exports = app;
