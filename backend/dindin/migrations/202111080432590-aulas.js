'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
     await queryInterface.createTable('Aulas', { 
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
        }
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
      await queryInterface.dropTable('Aulas'); 
  }
};
