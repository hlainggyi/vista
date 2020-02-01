const { Image, Person } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      // const images = await Education.find({}, {__v:0})
      //                                   .populate("category", {images:0, __v:0})
      // res.send({
      //   images: images
      // })
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the images"
      });
    }
  },
  async show(req, res) {
    try {
      // const image = await Education.findById({ _id: req.params.educationID })
      // res.send({
      //   education: education
      // })
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the images"
      });
    }
  },
  async post(req, res) {
    try {
      const newImage = {
        name: req.body.name,
        caption: req.body.caption,
        src: req.body.src + "/" + req.body.name,
        person: req.body.person
      };
      // const image = await Image.create(req.body);

      // const person = await Person.findOne({ _id: image.person }).exec();
      // // 3. Add newly created user to the actual company
      // person.images.push(image);
      // await person.save();

      res.send({
        image: newImage,
        saved: true,
        message: "Create company Successfully"
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to create the education"
      });
    }
  }
  // async put (req, res) {
  //   try {
  //     const image = await Education.update({ _id: req.params.educationID }, req.body)
  //     res.send({
  //       education: education
  //     })
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to update the education'
  //     })
  //   }
  // },
  // async remove (req, res) {
  //   try {
  //     const image = await Education.remove({ _id: req.params.educationID })
  //     res.send("success deleted")
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to delete the education'
  //     })
  //   }
  // }
};
