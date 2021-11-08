'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Cursos', { 
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    } 
  });     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cursos');
     
  }
};
