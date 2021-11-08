const { Sequelize } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
 
  const Curso = sequelize.define("Cursos", {
    titulo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    descricao: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    capa: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    professor: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  })
  return Curso;
  }