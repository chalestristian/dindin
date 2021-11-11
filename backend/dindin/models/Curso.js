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