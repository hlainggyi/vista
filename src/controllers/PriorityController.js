const { Priority } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const priorities = await Priority.find({});
      res.send({
        priorities: enData(priorities)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Priority"
      });
    }
  },
  async list(req, res) {
    try {
      const priorities = await Priority.find({}, { _id: 0, mm: 1, jp: 1 });
      res.send({
        priorities: enData(priorities)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Priority"
      });
    }
  },
  async post(req, res) {
    try {
      await Priority.create(req.body.data);
      res.send({
        saved: true,
        message: "Successiful created Priority !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your Priority create failed !"
      });
    }
  },
  async put(req, res) {
    try {
      await Priority.updateOne({ _id: req.body.data._id }, req.body.data);
      res.send({
        saved: true,
        message: "Successiful updated Priority !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your Priority update failed !"
      });
    }
  }
};
