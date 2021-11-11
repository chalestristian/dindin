const  Curso  = require('../models/Curso');
const  Aula  = require('../models/Aula');

module.exports ={


  async create(req, res) {  
    try{  
      const { titulo, descricao, capa, professor } = req.body; 
      const curso = await Curso.create({titulo, descricao, capa, professor});
      return res.json(curso);
    }catch{
      return res.status(400).json({ error: err.mesage });
    }
    }, 

  async getAll(req, res) {  
    try{
      const curso = await Curso.findAll({});
      return res.json(curso);
    } catch(err) {
      return res.status(400).json({ error: err.mesage });
    }
  },
 
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
  },
  
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
  },

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
  },













  async getCursoeAula(req, res) {  
    const curso = await Curso.findAll({});
  
    return res.json(curso);

    
  },

}