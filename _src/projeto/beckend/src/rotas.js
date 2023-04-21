const express = require("express");
const rotas = express.Router();

const pessoaController = require("./controller/pessoaController");

rotas.get("/diga", pessoaController.read);
rotas.post("/criar", pessoaController.create);
rotas.delete("/deletar/:id", pessoaController.delete);
rotas.post("/update/:id", pessoaController.update);


module.exports = rotas;