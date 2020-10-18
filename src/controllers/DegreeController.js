const { Degree } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const degrees = await Degree.find({});
      res.send({
        degrees: enData(degrees)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Degree"
      });
    }
  },
  async list(req, res) {
    try {
      const degrees = await Degree.find({}, { _id: 0, mm: 1, jp: 1 });
      res.send({
        degrees: enData(degrees)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Degree"
      });
    }
  },
  async post(req, res) {
    try {
      await Degree.create(req.body.data);
      res.send({
        saved: true,
        message: "Successiful created Degree !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your degree create failed !"
      });
    }
  },
  async put(req, res) {
    try {
      await Degree.updateOne({ _id: req.body.data._id }, req.body.data);
      res.send({
        // degree: updageDegree,
        saved: true,
        message: "Successiful updated degree !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your degree update failed !"
      });
    }
  }
};
