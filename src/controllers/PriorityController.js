const { Priority } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const priorities = await Priority.find({});
      res.send({
        priorities: priorities
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
        priorities: priorities
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Priority"
      });
    }
  },
  async post(req, res) {
    try {
      await Priority.create(req.body);
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
      await Priority.updateOne({ _id: req.body._id }, req.body);
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
