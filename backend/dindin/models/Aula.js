const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Aulas = sequelize.define("Aulas", {
    titulo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    NumeroAula: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    professor: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    aulaCapa: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    aulaVideo: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    cursoId:{
      allowNull: false,
      type: Sequelize.INTEGER,      
      references: {      
        model: 'Cursos',
        key: 'id'
      },
  }})
  return Aulas;
}