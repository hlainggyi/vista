const fs = require("fs");
const mime = require("mime");

// -- for passport image

const uploadImage = async (req, res, next) => {
  try {
    var img = await req.body.personInfo.profileImage.split(".");
    var imgLength = img.length;

    if (imgLength === 1) {
      // var matches = await image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      var matches = await req.body.personInfo.profileImage.match(
        /^data:([A-Za-z-+\/]+);base64,(.+)$/
      ),
        response = {};

      if (matches.length !== 3) {
        return new Error("Invalid input string");
      }

      response.type = await matches[1];
      response.data = await Buffer.from(matches[2], "base64");
      let decodedImg = await response;
      let imageBuffer = await decodedImg.data;
      let type = await decodedImg.type;
      let extension = await mime.getExtension(type);
      let fileName = (await new Date().toISOString()) + "-image." + extension;

      await fs.writeFileSync("./uploads/" + fileName, imageBuffer, "utf8");
      req.body.personInfo.profileImage = fileName;
      next();
      // } else if (imgLength === 3) {
      //   req.body.personInfo.profileImage = img;
      //   next();
    } else {
      next();
    }
  } catch (e) {
    next(e);
  }
};
module.exports = uploadImage;
