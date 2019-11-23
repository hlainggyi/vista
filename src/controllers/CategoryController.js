const {Category} = require('../models');

module.exports = {
  async index (req, res) {
    try {
      const categories = await Category.find({})
      res.send({
        categories: categories
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the categories'
      })
    }
  },
  async getCategoryName (req, res) {
    try {
      const categories = await Category.find({ feature: req.params.name }).populate("educations")
      res.send({
        categories: categories
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the categories'
      })
    }
  },
  async show (req, res) {
    try {
      const category = await Category.findById({ _id: req.params.categoryId })
      res.send({
        category: category
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the categories'
      })
    }
  },
  async post (req, res) {
    try {
      const category = await Category.create(req.body)
      res.send({
        category: category
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the category'
      })
    }
  },
  async put (req, res) {
    try {
      const category = await Category.update({ _id: req.params.categoryId }, req.body)
      res.send({
        category: category
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the category'
      })
    }
  },
  async remove (req, res) {
    try {
      await Category.remove({ _id: req.params.categoryId })
      res.send("success deleted")
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the category'
      })
    }
  }
}
