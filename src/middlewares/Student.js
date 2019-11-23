const Joi = require('joi')

module.exports = {
  create (req, res, next) {
    const schema = {
      name: Joi.string().min(3).max(30).required(),
      school: Joi.string().required(),
      fatherName: Joi.string(),
      motherName: Joi.string(),
      startGrade: Joi.string(),
      passGrade: Joi.string(),
      createdUser: Joi.string(),
      updatedUser: Joi.string()
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'You must provide a valid name error.'
          })
          break;
        case 'school':
          res.status(400).send({
            error: 'You must provide a valid schoolId error.'
          })
          break;
        default:
          res.status(400).send({
            error: 'Invalid student policies information'
          })
      }
    } else {
      next()
    }
  }
}
