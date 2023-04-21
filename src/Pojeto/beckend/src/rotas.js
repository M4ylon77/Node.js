const express = require("express");
const rotas = express.Router();

const pessoaController = require ("./controller/pessoaController");

rotas.get('/dados', pessoaController.read);
rotas.post("/preencher", pessoaController.create);
rotas.delete("/deletar/:id", pessoaController.delete);


module.exports=rotas;