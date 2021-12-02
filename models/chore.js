const {DataTypes} = require('sequelize');
const db = require('../db');

const Chore = db.define('chore', {
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    deadline: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    assign: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complete: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})