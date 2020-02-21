const { UpdateData } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const vistadatas = await UpdateData.find({});
      res.send({
        vistadatas: vistadatas
      });
    } catch (err) {
      res.status(500).send({
        error: "Your vistadata failed !"
      });
    }
  },
  async show(req, res) {
    try {
      const vistadata = await UpdateData.findOne({ name: req.body.name });
      res.send({
        vistadata: vistadata
      });
    } catch (err) {
      res.status(500).send({
        error: "Your vistadata failed !"
      });
    }
  },
  async post(req, res) {
    try {
      await UpdateData.create(req.body);
      res.send({
        saved: true,
        message: "Successiful created !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your create failed !"
      });
    }
  },
  async put(req, res) {
    try {
      const updateData = {
        name: req.body.name,
        data: req.body.data
      };
      await UpdateData.updateOne({ name: req.body.name }, updateData);
      res.send({
        saved: true,
        message: "Successiful updated !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your update failed !"
      });
    }
  }
};
