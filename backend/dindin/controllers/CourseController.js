const Course = require('../models/Course');

module.exports = {

  async create(req, res) {
    try {
      const { title, description, cover, instructor } = req.body;
      const course = await Course.create({ title, description, cover, instructor });
      return res.json(course);
    } catch (err){
      return res.status(400).json({ error: err.message })
    }
  },

  async getAll(req, res) {
    try {
      const course = await Course.findAll({});
      return res.json(course);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async getOne(req, res) {
    try {
      const course = await Course.findByPk(req.params.id);
      if (course) {
        return res.status(200).json(course);
      }
      else {
        return res.status(200).json({ mensagem: "Course not found" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  },

  async update(req, res) {
    try {
      const course = await Course.findByPk(req.params.id);
      if (course) {
        await course.update(req.body);
        return res.status(200).json(course);
      }
      else {
        return res.status(200).json({ mensagem: "Course not found to be updated" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const course = await Course.findByPk(req.params.id);
      if (course) {
        await course.destroy();
        return res.status(200).json(course);
      }
      else {
        return res.status(200).json({ mensagem: "Course not found to be deleted" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
}