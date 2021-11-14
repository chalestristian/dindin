const Lesson = require('../models/Lesson');
const Course = require('../models/Course');


module.exports = {

  async create(req, res) {

    const { title, number, cover, video, course_id } = req.body;
    const lesson = await Lesson.create({ title, number, cover, video, course_id  });
    return res.json(lesson);
  },

  async getAll(req, res) {
    try {
      const lesson = await Lesson.findAll({});
      return res.status(200).json(lesson);
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  },

  async getOne(req, res) {
    try {
      const lesson = await Lesson.findByPk(req.params.id);
      if (lesson) {
        return res.status(200).json(lesson);
      }
      else {
        return res.status(200).json({ mensagem: "Lesson not found" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  },

  async update(req, res) {
    try {
      const lesson = await Lesson.findByPk(req.params.id);
      if (lesson) {
        await lesson.update(req.body);
        return res.status(200).json(lesson);
      }
      else {
        return res.status(200).json({ mensagem: "Leason not found to be updated" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const lesson = await Lesson.findByPk(req.params.id);
      if (lesson) {
        await lesson.destroy();
        return res.status(200).json(lesson);
      }
      else {
        return res.status(200).json({ mensagem: "Lesson not found to be deleted" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  },

  async store(req, res){
    const {course_id} = req.params;
    const { title, number, cover, video} = req.body;

    const course = await Course.findByPk(course_id);
    if(!course){
      return res.status(400).json({ mensagem: "Course not found" });
    }

    const lesson = await Lesson.create({
      title, number, cover, video,course_id
    })

    return res.json(lesson);

  }

}
