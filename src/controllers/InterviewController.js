const { Partner, Person, Interview } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const interviews = await Interview.find().populate("partner", {
        companyName: 1,
        _id: 0
      });
      res.send({
        interviews: interviews
      });
    } catch (err) {
      res.status(500).send({
        error: "Interview list failed !"
      });
    }
  },
  async show(req, res) {
    try {
      const data = await Interview.findById({
        _id: req.params.interview
      }).populate("partner");

      var date = new Date(data.date).toISOString().substr(0, 10);

      var interview = {
        _id: data._id,
        date: date,
        partner: data.partner,
        title: data.title,
        persons: data.persons
      };

      res.send({
        interview: interview
      });
    } catch (err) {
      res.status(500).send({
        error: "This interview is failed !"
      });
    }
  },
  async persons(req, res) {
    try {
      const persons = await Person.aggregate([
        {
          $match: {
            company: req.user.company,
            isActive: 1,
            isActive: 2
          }
        },
        {
          $project: {
            profileImage: "$personInfo.profileImage",
            isActive: "$isActive",
            code: "$code",
            name: "$personInfo.name",
            age: {
              $divide: [
                { $subtract: [new Date(), "$personInfo.dob"] },
                365 * 24 * 60 * 60 * 1000
                // { $round: ["$subtract", 1] }
              ]
            },
            married: "$personDetail.married",
            remarks: "$personDetail.remarks.jp",
            edu: { $arrayElemAt: ["$edus.education.jp", -1] }
          }
        }
      ]).allowDiskUse(true);
      res.send({
        persons: persons
      });
    } catch (err) {
      res.status(500).send({
        error: "This error is Person index"
      });
    }
  },
  async post(req, res) {
    try {
      const newInterview = {
        company: req.user.company,
        date: req.body.date,
        partner: req.body.partner,
        title: req.body.title,
        persons: req.body.persons
      };
      await Interview.create(newInterview);
      res.send({
        // interview: newInterview,
        saved: true,
        message: "This interview list is created !"
      });
    } catch (err) {
      res.status(500).send({
        error: "This interview list create is failed !"
      });
    }
  },
  async put(req, res) {
    try {
      await Interview.updateOne({ _id: req.body._id }, req.body);
      res.send({
        saved: true,
        message: "This interview list is updated !"
      });
    } catch (err) {
      res.status(500).send({
        error: "This interview list is update failed !"
      });
    }
  }
};
