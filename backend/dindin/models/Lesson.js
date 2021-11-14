const { Model, DataTypes } = require("sequelize");

class lessons extends Model{
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,      
      number:  DataTypes.INTEGER,      
      cover: DataTypes.STRING,      
      video: DataTypes.STRING,
      course_id: DataTypes.INTEGER,     
    },
    {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.lessons, { foreignKey: 'course_id', as: 'owner' });
  }}
module.exports = lessons;
 