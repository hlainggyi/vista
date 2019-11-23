const { Education, Category} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const educations = await Education.find({}, {__v:0})
                                        .populate("category", {educations:0, __v:0})
      res.send({
        educations: educations
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the educations'
      })
    }
  },
  async show (req, res) {
    try {
      const education = await Education.findById({ _id: req.params.educationID })
      res.send({
        education: education
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the educations'
      })
    }
  },
  async post (req, res) {
    try {
      const education = await Education.create(req.body)

      const category = await Category.findOne({ _id: education.category}).exec();
      // 3. Add newly created user to the actual company
      category.educations.push(education)
      await category.save();
      
      res.send({
        saved : true,
        message: "Create company Successfully"
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the education'
      })
    }
  },
  // async put (req, res) {
  //   try {
  //     const education = await Education.update({ _id: req.params.educationID }, req.body)
  //     res.send({
  //       education: education
  //     })
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to update the education'
  //     })
  //   }
  // },
  // async remove (req, res) {
  //   try {
  //     const education = await Education.remove({ _id: req.params.educationID })
  //     res.send("success deleted")
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'an error has occured trying to delete the education'
  //     })
  //   }
  // }
}
