const { Edu } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const edus = await Edu.find({});
      res.send({
        edus: enData(edus)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Edu"
      });
    }
  },
  async list(req, res) {
    try {
      const edus = await Edu.find({}, { _id: 0, mm: 1, jp: 1 });
      res.send({
        edus: enData(edus)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Edu"
      });
    }
  },
  async post(req, res) {
    try {
      await Edu.create(req.body.data);
      res.send({
        saved: true,
        message: "Successiful created Edu !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your edu create failed !"
      });
    }
  },
  async put(req, res) {
    try {
      await Edu.updateOne({ _id: req.body.data._id }, req.body.data);
      res.send({
        saved: true,
        message: "Successiful updated edu !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your edu update failed !"
      });
    }
  }
};
