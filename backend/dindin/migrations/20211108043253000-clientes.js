'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
     await queryInterface.createTable('clientes', { 
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telefone: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      course_id:{
        allowNull: false,
        type: Sequelize.INTEGER,  
        referencer: {model: 'courses', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete:'CASCADE',     
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    }); 
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('clientes'); 
  }
};