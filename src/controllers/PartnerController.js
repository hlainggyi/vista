const { Partner, Company } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const partners = await Partner.find(
        { company: req.user.company },
        { __v: 0 }
      );
      res.send({
        partners: partners
      });
    } catch (err) {
      res.status(500).send({
        error: "This partner list is failed !"
      });
    }
  },
  async post(req, res) {
    try {
      // 1. Find the the actual school
      const company = await Company.findById({ _id: req.user.company });

      // 2. Create a new teacher
      const newPartner = {
        name: req.body.name,
        company: req.user.company,
        companyName: req.body.companyName,
        logo: req.body.logo,
        email: req.body.email,
        address: req.body.address,
        status: req.body.status
      };

      const partner = await Partner.create(newPartner);

      // 3. Add newly created teacher to the actual school
      company.partners.push(partner);

      await company.save();
      res.send({
        saved: true,
        message: "Partner create is success !"
      });
    } catch (err) {
      res.status(500).send({
        error: "Partner create is failed !"
      });
    }
  },
  async show(req, res) {
    try {
      const partner = await Partner.findById({ _id: req.params.partner });
      res.send({
        partner: partner
      });
    } catch (err) {
      res.status(500).send({
        error: "This partner is failed !"
      });
    }
  },
  async put(req, res) {
    try {
      await Partner.updateOne({ _id: req.body._id }, req.body);
      res.send({
        saved: true,
        message: "This partner is updated !"
      });
    } catch (err) {
      res.status(500).send({
        error: "This partner is failed update !"
      });
    }
  },
  async remove(req, res) {
    try {
      const teacher = await Teacher.remove({ _id: req.params.teacherId });
      res.send("Success deleted !");
    } catch (err) {
      res.status(500).send({
        error: "This error is Teaher remove"
      });
    }
  }
};
