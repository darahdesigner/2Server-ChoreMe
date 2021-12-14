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
<<<<<<< HEAD
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}
)
console.log(process.env.HOST);
=======
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
})
>>>>>>> 5914f431649e85af57c2ce9ed35c8a1ac459b73b

// ^^ local    V V heroku

sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
    }
}
}
)

module.exports = db;