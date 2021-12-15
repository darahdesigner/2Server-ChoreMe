const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, 
    process.env.HOST =="local" ?
    {
    dialect: 'postgres',
    }
   :
   {
        dialect: 'postgres',
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      }
  )
  
  module.exports = sequelize;