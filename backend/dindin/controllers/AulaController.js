const { Aula } = require('../models/Aula');
const { Op, DOUBLE } = require("sequelize");

class AulaController {
  async create(req, res) {  
    try {
      let aula = {
        titulo: String(req.body.titulo),
        NumeroAula: Number(req.body.NumeroAula),
        professor: String(req.body.professor),
        aulaCapa: String(req.body.aulaCapa),
        aulaVideo: String(req.body.aulaVideo),
        cursoId: Number(req.body.cursoId),
        
      }
      const aulaResult = await Aula.create(aula);
      return res.status(200).json(aulaResult);
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }

  async getAll(req, res) {
    try {
      const aula = await Aula.findAll({
      });
      return res.status(200).json(aula);
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async getOne(req, res) {    
    try {
      const aula = await Aula.findByPk(req.params.id);
      if (aula) {
        return res.status(200).json(aula);
      }
      else {
        return res.status(200).json({ mensagem: "aula não encontrado" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async update(req, res) {   
    try {
      const aula = await Aula.findByPk(req.params.id);
      if (aula) {
        await aula.update(req.body);
        return res.status(200).json(aula);
      }
      else {
        return res.status(200).json({ mensagem: "aula não encontrado para atualização" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {   
    try {
      const aula = await Aula.findByPk(req.params.id);
      if (aula) {
        await aula.destroy();
        return res.status(200).json(aula);
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
module.exports = new AulaController();