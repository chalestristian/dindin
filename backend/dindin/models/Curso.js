const { Model, DataTypes } = require("sequelize");

class Curso extends Model{
  static init(sequelize){
    super.init({
      titulo: DataTypes.STRING,      
      descricao:  DataTypes.STRING,      
      capa: DataTypes.STRING,      
      professor: DataTypes.STRING,
      },
      {
        sequelize
      })
    }}

module.exports = Curso;



// const { Sequelize } = require("sequelize");
// module.exports = (sequelize, Sequelize) => {
 
//   const Curso = sequelize.define("Cursos", {
//     titulo: {
//       allowNull: false,
//       type: Sequelize.STRING,
//     },
//     descricao: {
//       allowNull: false,
//       type: Sequelize.STRING,
//     },
//     capa: {
//       allowNull: false,
//       type: Sequelize.STRING,
//     },
//     professor: {
//       allowNull: false,
//       type: Sequelize.STRING,
//     },
//   })
//   return Curso;
//   }