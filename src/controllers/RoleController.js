const { Role } = require("../models");
const enData = require("../data/crypto");

module.exports = {
  async index(req, res) {
    try {
      const roles = await Role.findByRole(req.user.role);

      res.send({
        roles: enData(roles)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Admin Roles"
      });
    }
  },
  async devroles(req, res) {
    try {
      // roles.level
      const roles = await Role.find({ level: { $gt: 0 } }).sort({ date: -1 });
      res.send({
        roles: enData(roles)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Roles"
      });
    }
  },
  async show(req, res) {
    try {
      const role = await Role.findById({ _id: req.params.RoleID });
      res.send({
        role: enData(role)
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the Roles"
      });
    }
  },
  async post(req, res) {
    try {
      const role = await Role.create(req.body);
      res.send({
        role: role
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to create the Role"
      });
    }
  },
  async put(req, res) {
    try {
      const role = await Role.update({ _id: req.params.RoleID }, req.body);
      res.send({
        role: role
      });
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to update the Role"
      });
    }
  },
  async remove(req, res) {
    try {
      await role.remove({ _id: req.params.RoleID });
      res.send("success deleted");
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to delete the Role"
      });
    }
  }
};
