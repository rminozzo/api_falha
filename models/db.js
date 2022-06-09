const Sequelize = require('sequelize');

const sequelize = new Sequelize('falha_massiva', 'telefonia', 'T4m4nho@1012',{
    host: '172.18.14.234',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com banco OK")
}).catch(function(){
    console.log("Erro de conexão")
});

module.exports = sequelize;