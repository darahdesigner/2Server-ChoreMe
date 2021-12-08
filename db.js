const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, 
//     process.env.HOST == "local" ?
//     {
//     dialect: 'postgres',
// }
// :

// ^^ for local   VVV for heroku
{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}
)
console.log(process.env.HOST);

module.exports = sequelize;