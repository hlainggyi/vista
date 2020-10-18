const { Role, User } = require("../models")
// isAuthenticated
// const isAuth = require('./isAuth')


// middleware for doing role-based permissions
module.exports = function isRole(...allowed) {
  const isAllowed = role => allowed.indexOf(role) > -1;

  // return a middleware
  return async (req, res, next) => {

    const user = await User.findOne({ _id: req.user }, { role: 1 })
    const role = await Role.findOne({ _id: user.role })
    if (isAllowed(role.name))
      next(); // role is allowed, so continue on the next middleware
    else {
      res.status(403).send({
        error: 'you do not have access permission to this resource'
      })
    }
  }
}