const  Aula  = require('../models/Aula');


module.exports ={

  async create(req, res) {

      const { titulo, numeroaula, professor, aulacapa, aulavideo, cursoid} = req.body;    
      const aula = await Aula.create({ titulo, numeroaula, professor, aulacapa, aulavideo, cursoid});
      return res.json(aula);        
    },

  async getAll(req, res) {
    try {
      const aula = await Aula.findAll({});
      return res.status(200).json(aula);
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  },

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
  },

  async getCursoAulas(req, res) {    
    try {
      const curso = await Curso.findByPk(req.params.id);
      const aula = await Aula.findByPk(req.params.cursoid);
      if (aula && curso) {
        return res.status(200).json(aula + curso);
        
      }
      else {
        return res.status(200).json({ mensagem: "aula não encontrado" });
      }
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  },

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
  },

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