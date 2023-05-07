const express = require("express");
const rotas =  express.Router();
const AnotacaoController = require("./controller/AnotacaoController");
//const AnotacaoCliente = require("./controller/ClienteController");


//Seção para definição das rotas de anotações 
//rotas.get("/anotacoes", AnotacaoController.read);

//Seção prara definição das rotas dos clienter 
//rotas.get("/clientes", AnotacaoCliente.read);
rotas.post("/anotacoes", AnotacaoController.create);

module.exports = rotas;
