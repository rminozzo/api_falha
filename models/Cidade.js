const Sequelize = require('sequelize');
const db = require('./db');

//Define tabela
const Clientes = db.define('clientes', {
    //atributos
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    owner: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false
    },
    asnumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ipv4: {
        type: Sequelize.STRING
    },
    ipv6: {
        type: Sequelize.STRING
    },
    aspath: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Clientes.sync();

module.exports = Clientes; 

/*

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
Cidade.sync({ force: true})

module.exports = Cidade; */

