const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Course = require('../models/Course')
const Lesson = require('../models/Lesson')

const connection = new Sequelize(dbConfig);

Course.init(connection);
Lesson.init(connection);
Lesson.associate(connection.models)
module.exports = connection;