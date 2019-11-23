const fs              = require('fs');
const path            = require('path');
const basename        = path.basename(__filename);
const controllers          = {};

    fs.readdirSync(__dirname)
      .filter((file) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
      .forEach((file) => {
        var filename = file.split('.')[0];
        var controller_name = filename.charAt(0).toUpperCase() + filename.slice(1);
        controllers[controller_name] = require('./'+file);
    });


module.exports = controllers;