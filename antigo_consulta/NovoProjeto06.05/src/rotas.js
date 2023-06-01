const express = require("express");
const rotas = express.Router();

const ClienteController = require("./controller/clienteCrontroller.js");
const ProdutoController = require("./controller/produtoController.js");

rotas.get("/ler", ClienteController.read);
rotas.get("/lerproduto", ProdutoController.read);
rotas.post("/cria", ClienteController.create);
rotas.post("/cproduto", ProdutoController.create);
rotas.delete("/cliente/:id", ClienteController.delete);
rotas.delete("/produto/:id", ProdutoController.delete);
rotas.post("/upcliente/:id", ClienteController.update);
rotas.post("/uproduto/:id", ProdutoController.update);


module.exports= rotas;