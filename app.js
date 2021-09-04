const express = require ("express");
var cors = require('cors');
//const db = require ('./models/db');

const Cidade = require('./models/Cidade');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors());
    next();
});

//CADASTRA CIDADE
app.post("/cidade", async (req, res) => {
    const { nome, status } = req.body;   

    await Cidade.create(req.body).
    then(() => {
        return res.json({
            erro: false,
            mensagem: "Cidade Cadastrada com Sucesso"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Ocorreu um erro ao cadastrar"
        });
    });    
});


//Listar
app.get("/cidades", async (req, res) => {

    await Cidade.findAll({
          attributes: ['id','nome', 'status']
          //order: [['name', 'ASC']]
    })
    .then((cidades) => {
        return res.json({
            
            cidades
        })
    }).catch(() => {
        return res.status(400).json({
            
            mensagem: []
        });
    });
});


app.get("/cid/:id", async (req, res) => {
    const { id } = req.params;

    //await User.findAll({ where: { id: id } })
    await Cidade.findByPk(id)
        .then((cidade) => {
            return res.json({
                erro: false,
                cidade: cidade
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum usuário encontrado!"
            });
        });
});


//Listar uma só por status

app.get("/cidade/:status", async (req, res) => {
    const { status } = req.params;

    //await User.findAll({ where: { id: id } })
    await Cidade.findAll({where: {status : status},
        attributes: ['nome', 'status',]
    })
        .then((cidade) => {
            return res.json({
                cidade
            });
        }).catch(() => {
            return res.status(400).json({
                mensagem: "[]"
            });
        });
});

app.put("/cidade", async (req, res) => {
    const { id } = req.body;

    await Cidade.update(req.body, {where: {id}})
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Cidade editada com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Não foi possivel editar"
        });
    });
});

app.delete("/cidade/:id", async (req, res) => {
    const { id } = req.params;

    await Cidade.destroy({ where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Cidade apagada com sucesso"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nao foi possivel apagar!"
            });
        });
});


app.listen(8080, () =>{
    console.log("Tudo ok");
});

