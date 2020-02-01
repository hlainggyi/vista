// const data = require('./data.json')
// const mm = require('./mm.json')
// const jp = require('./jp.json')

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

// const labels          = { data, mm, jp};

const labels = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-5) === ".json"
    );
  })
  .forEach((file) => {
    // var filename = file.slice(-5);
    // labels[filename] = require("./" + file);
    var filename = file.split(".")[0];
    // var label_name = filename.charAt(0).toUpperCase() + filename.slice(1);
    var label_name = filename.charAt(0).toLowerCase() + filename.slice(1);
    labels[label_name] = require("./" + file);
  });

module.exports = labels;
