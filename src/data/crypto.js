var CryptoJS = require("crypto-js");
require('dotenv').config()

module.exports = function (data) {
    // Encrypt
    var enData = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.DATA_SECRET).toString();
    return enData
}
