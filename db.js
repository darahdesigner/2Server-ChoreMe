const Sequelize = require('sequelize');

//Ebone line 4
//const sequelize = new Sequelize("postgres://postgres:41e4c9c7d8eb46a69433e0075118e918@localhost:5432/choremeserver")

//Will line 7
// const sequelize = new Sequelize('postgres://postgres:Hellowill1!@localhost:5432/ChoreMe')

//Darah line 10
const sequelize = new Sequelize("postgres://postgres:7cfa37e368584d0785269f66d3c39c22@localhost:5432/Chore-Me");

module.exports = sequelize;