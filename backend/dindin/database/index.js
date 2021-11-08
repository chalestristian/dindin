const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Curso = require('../models/Curso')

const connection = new Sequelize(dbConfig);

Curso.init(connection);

module.exports = connection;