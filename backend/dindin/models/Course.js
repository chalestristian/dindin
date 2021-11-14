const { Model, DataTypes } = require("sequelize");

class course extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      cover: DataTypes.STRING,
      instructor: DataTypes.STRING,
    },
      {
        sequelize
      })
  }

}

module.exports = course;