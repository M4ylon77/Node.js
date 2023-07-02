  const express = require("express");
const rotas = express.Router();
const path= require("path");
const VendaControler = require("./Controller/VendaController");
const FormularioController = require("./Controller/clienteController");


rotas.get("/cadastro", VendaControler.produto);
rotas.post("/adicionar", VendaControler.registro);
rotas.get("/lista", VendaControler.lista);
rotas.get("/Produto.html", (req, res) => {
  const filePath = path.join(__dirname, "./views/Produto.html");
  res.sendFile(filePath);
});

// tentativa de criar menu || rotas.get('/home', FormularioController.home);
rotas.get('/cad', FormularioController.cadastro);
rotas.post('/add', FormularioController.register);
rotas.get("/listacliente", FormularioController.lista);


rotas.get("/Cliente.html" , (req,res) =>{
  const filePath = path.join(__dirname, "./views/Cliente.html");
  res.sendFile(filePath);
});

// tentativa de leitura BD || rotas.get('/ler',FormularioController.read);

rotas.get("/menu.html" , (req,res) =>{
  const filePath = path.join(__dirname, "./views/menu.html");
  res.sendFile(filePath);
});

module.exports = rotas;