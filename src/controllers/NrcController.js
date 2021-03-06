const { NRC } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const nrclists = await NRC.find({});
      res.send({
        nrclists: enData(nrclists)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the NRC"
      });
    }
  },
  async post(req, res) {
    try {
      await NRC.create(req.body.data);
      res.send({
        saved: true,
        message: "Successiful created nrc !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your nrc create failed !"
      });
    }
  },
  async put(req, res) {
    try {
      const updateNrc = {
        nrclists: req.body.data.nrclists
      };
      await NRC.updateOne({ _id: req.body.data._id }, updateNrc);
      // const nrclists = req.body;
      res.send({
        saved: true,
        message: "Successiful updated nrc !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your nrc update failed !"
      });
    }
  }
};
