const { JapaneseLanguage } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const japaneselanguages = await JapaneseLanguage.find({});
      res.send({
        japaneselanguages: japaneselanguages
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the JapaneseLanguage"
      });
    }
  },
  async list(req, res) {
    try {
      const japaneselanguages = await JapaneseLanguage.find(
        {},
        { _id: 0, mm: 1, jp: 1 }
      );
      res.send({
        japaneselanguages: japaneselanguages
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Family"
      });
    }
  },
  async post(req, res) {
    try {
      await JapaneseLanguage.create(req.body);
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
      await JapaneseLanguage.updateOne({ _id: req.body._id }, req.body);
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
