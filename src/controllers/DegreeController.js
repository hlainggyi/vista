const { Degree } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const degrees = await Degree.find({});
      res.send({
        degrees: degrees
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
        degrees: degrees
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Degree"
      });
    }
  },
  async post(req, res) {
    try {
      await Degree.create(req.body);
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
      // const updageDegree = req.body.degree;
      await Degree.updateOne({ _id: req.body._id }, req.body);
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
