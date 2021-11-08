const { Curso } = require('../models/Curso');
const { Op, DOUBLE } = require("sequelize");


class CursoController {
  
  async create(req, res) {
    try { 
      let curso = {
        titulo: String(req.body.titulo),
        descricao: String(req.body.descricao),
        capa: String(req.body.capa),
        professor: String(req.body.professor),
      }
      
      // console.log(curso) AQUI RETORNA
      
      const cursoResult = await Curso.create(curso); 
      return res.status(200).json(cursoResult);
      
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }

  async getAll(req, res) {
    try {
      const curso = await Curso.findAll({
      });
      return res.status(200).json(curso);
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async getOne(req, res) {    
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (curso) {
        return res.status(200).json(curso);
      }
      else {
        return res.status(200).json({ mensagem: "curso não encontrado" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async update(req, res) {   
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (curso) {
        await curso.update(req.body);
        return res.status(200).json(curso);
      }
      else {
        return res.status(200).json({ mensagem: "curso não encontrado para atualização" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {   
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (curso) {
        await curso.destroy();
        return res.status(200).json(curso);
      }
      else {
        return res.status(200).json({ mensagem: "Usuario não encontrado para deletar" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
  
}
module.exports = new CursoController();