const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:Hellowill1!@localhost:5432/choreme')

module.exports = sequelize;