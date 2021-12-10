const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL,{
   Sequelize = new Sequelize(`postgres://localhost:${PORT}/Chore-Me`)
}
)

// ^^ local    V V heroku

// sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//     }
// }
// }
// )

module.exports = db;