var CryptoJS = require("crypto-js");
require('dotenv').config()

const crypto = async (req, res, next) => {
    try {
        var data = req.body.data;

        // Decrypt
        var bytes = CryptoJS.AES.decrypt(data, process.env.DATA_SECRET);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        req.body.data = decryptedData
        next()

    } catch (error) {
        res.status(401).send({ error: 'Check data crypto.' })
    }
}

module.exports = crypto;
