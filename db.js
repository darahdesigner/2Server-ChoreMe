const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, 
  
{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: process.env.HOST?false : true,
            rejectUnauthorized: false
        }
    }
}
)
console.log(process.env.HOST);

module.exports = sequelize;