const { Religion, Nationality } = require("../models");

module.exports = {
  async indexReligion(req, res) {
    try {
      const religions = await Religion.find({});
      res.send({
        religions: religions
      });
    } catch (err) {
      res.status(500).send({
        error: "Your religion list failed !"
      });
    }
  },
  async postReligion(req, res) {
    try {
      await Religion.create(req.body);
      res.send({
        saved: true,
        message: "Successiful created religion !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your religion create failed !"
      });
    }
  },
  async putReligion(req, res) {
    try {
      const updateReligion = {
        religions: req.body.religions
      };
      await Religion.updateOne({ _id: req.body._id }, updateReligion);
      res.send({
        saved: true,
        message: "Successiful updated religion !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your religion update failed !"
      });
    }
  },
  async indexNationality(req, res) {
    try {
      const nationalities = await Nationality.find({});
      res.send({
        nationalities: nationalities
      });
    } catch (err) {
      res.status(500).send({
        error: "Your nationality list failed !"
      });
    }
  },
  async postNationality(req, res) {
    try {
      await Nationality.create(req.body);
      res.send({
        saved: true,
        message: "Successiful created nationality !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your nationality create failed !"
      });
    }
  },
  async putNationality(req, res) {
    try {
      const updateNationality = {
        nationalities: req.body.nationalities
      };
      await Nrc.updateOne({ _id: req.body._id }, updateNationality);
      // const nrclists = req.body;
      res.send({
        saved: true,
        message: "Successiful updated nationality !"
      });
    } catch (err) {
      res.status(500).send({
        saved: false,
        error: "Your nationality update failed !"
      });
    }
  }
};
