const Sequelize = require('sequelize');

const db = require('./db');

const Cidade = db.define('cidades',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
//Cidade.sync({ alter: true})

module.exports = Cidade;

