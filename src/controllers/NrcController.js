const { Nrc } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const nrclists = await Nrc.find({});
      res.send({
        nrclists: nrclists
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the NRC"
      });
    }
  },
  async post(req, res) {
    try {
      // const newNrc = {
      //   nrclists: req.body.nrclists
      // };

      const nrclists = await Nrc.create(req.body);
      res.send({
        saved: true,
        message: "Successiful",
        nrclists: nrclists
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to create the NRC"
      });
    }
  },
  async put(req, res) {
    try {
      const updateNrc = {
        nrclists: req.body.nrclists
      };
      const nrclists = await Nrc.update({ _id: req.body._id }, updateNrc);
      // const nrclists = req.body;
      res.send({
        nrclists: nrclists
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to update the NRC"
      });
    }
  }
};
