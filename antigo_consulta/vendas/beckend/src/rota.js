const express = require("express");
const rotas = express.Router();

const VendasController = require("./controller/VendasCrontroller");

rotas.get("/ler", VendasController.read);

module.exports = rotas;