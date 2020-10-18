const { Family } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const families = await Family.find({});
      res.send({
        families: enData(families)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Family"
      });
    }
  },
  async list(req, res) {
    try {
      const families = await Family.find({}, { _id: 0, mm: 1, jp: 1 });
      res.send({
        families: enData(families)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Family"
      });
    }
  },
  async post(req, res) {
    try {
      await Family.create(req.body.data);
      res.send({
        saved: true,
        message: "Successiful created Family !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your Family create failed !"
      });
    }
  },
  async put(req, res) {
    try {
      await Family.updateOne({ _id: req.body.data._id }, req.body.data);
      res.send({
        saved: true,
        message: "Successiful updated Family !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your Family update failed !"
      });
    }
  }
};
