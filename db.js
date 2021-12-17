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



  // FROM package.json!

  // "repository": {
  //   "type": "git",
  //   "url": "git+https://github.com/darahdesigner/ChoreMe-Server.git"
  // },

  // ALSO PACKAGE.JSON
  // Under License
  // "bugs": {
  //   "url": "https://github.com/darahdesigner/ChoreMe-Server/issues"
  // },
  // "homepage": "https://github.com/darahdesigner/ChoreMe-Server#readme",

// package.json again
// in dependencies {}
// "middleware": "^1.0.0",

// Gabrielle had this in dev dependencies
// "nodemon": "^1.19.4"