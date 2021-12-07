const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})


// if (process.env.DATABASE_URL) {
// //the application is executed on heroku... use the postgres database
// sequelize = new Sequelize(pross.env.DATABASE_URL, {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     logging: true //false
// });
// } else {
//     //the appplication is executed on the local machine
//     sequelize = new Sequelize("postgres://localhost:5432/Chore-Me");
// }
module.exports = sequelize;