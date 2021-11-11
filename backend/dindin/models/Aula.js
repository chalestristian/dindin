const { Model, DataTypes } = require("sequelize");

class Aula extends Model{
  static init(sequelize){
    super.init({
      titulo: DataTypes.STRING,      
      numeroaula:  DataTypes.INTEGER,      
      professor: DataTypes.STRING,      
      aulacapa: DataTypes.STRING,
      aulavideo: DataTypes.STRING,
      cursoid: DataTypes.INTEGER,
    },
    {
      sequelize
    })

    
  }
}
module.exports = Aula;

 