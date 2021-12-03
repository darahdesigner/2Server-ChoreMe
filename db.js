const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect:'postegres',
})

module.exports = sequelize;