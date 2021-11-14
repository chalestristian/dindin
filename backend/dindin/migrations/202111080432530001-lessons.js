'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
     await queryInterface.createTable('lessons', { 
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cover: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      video: {
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
      await queryInterface.dropTable('lessons'); 
  }
};
