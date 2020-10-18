const { Major } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const majors = await Major.find({});
      res.send({
        majors: enData(majors)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Major"
      });
    }
  },
  async list(req, res) {
    try {
      const majors = await Major.find({}, { _id: 0, mm: 1, jp: 1 });
      res.send({
        majors: enData(majors)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Major"
      });
    }
  },
  async post(req, res) {
    try {
      await Major.create(req.body.data);
      res.send({
        saved: true,
        message: "Successiful created Major !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your Major create failed !"
      });
    }
  },
  async put(req, res) {
    try {
      await Major.updateOne({ _id: req.body.data._id }, req.body.data);
      res.send({
        saved: true,
        message: "Successiful updated Major !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your Major update failed !"
      });
    }
  }
};
