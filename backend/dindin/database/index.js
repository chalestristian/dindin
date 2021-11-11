const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Curso = require('../models/Curso')
const Aula = require('../models/Aula')

const connection = new Sequelize(dbConfig);

Curso.init(connection);
Aula.init(connection);

module.exports = connection;