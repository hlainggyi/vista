const Joi = require('joi')

module.exports = {
  create (req, res, next) {
    const schema = {
      name: Joi.string().min(3).max(30).required(),
      nrc: Joi.string().min(3).max(30).required(),
      school: Joi.string(),
      own_no_alpha: Joi.string(),
      own_no: Joi.number(),
      gender: Joi.number(),
      dob: Joi.date(),
      marriage_status: Joi.string(),
      father_name: Joi.string(),
      mother_name: Joi.string(),
      blood_type: Joi.string(),
      nationality: Joi.string(),
      religion: Joi.string(),
      position: Joi.string(),
      basic_salary: Joi.string(),
      department_id: Joi.string(),
      post_date: Joi.date(),
      address: Joi.string(),
      remove_status: Joi.number()
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'You must provide a valid name error.'
          })
          break;
        case 'position':
          res.status(400).send({
            error: 'You must provide a valid position error'
          })
          break;
        case 'nrc':
          res.status(400).send({
            error: 'You must provide a valid nrc error'
          })
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
