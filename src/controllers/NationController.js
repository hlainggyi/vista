const { Nation } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const nations = await Nation.find({});
      res.send({
        nations: enData(nations)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Nation"
      });
    }
  },
  async list(req, res) {
    try {
      const nations = await Nation.find({}, { _id: 0, mm: 1, jp: 1 });
      res.send({
        nations: enData(nations)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Nation"
      });
    }
  },
  async post(req, res) {
    try {
      await Nation.create(req.body.data);
      res.send({
        saved: true,
        message: "Successiful created Nation !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your Nation create failed !"
      });
    }
  },
  async put(req, res) {
    try {
      await Nation.updateOne({ _id: req.body.data._id }, req.body.data);
      res.send({
        saved: true,
        message: "Successiful updated Nation !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your Nation update failed !"
      });
    }
  }
};
