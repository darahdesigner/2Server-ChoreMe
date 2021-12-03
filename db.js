const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
<<<<<<< HEAD
        dialect:'postegres',
=======
    dialect: 'postgres',
>>>>>>> d1864a369ec3c114041bfbde3acdbb02ce1e3615
})

module.exports = sequelize;