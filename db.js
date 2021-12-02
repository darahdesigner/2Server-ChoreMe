const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:41e4c9c7d8eb46a69433e0075118e918@localhost:5432/choremeserver")

module.exports = sequelize;