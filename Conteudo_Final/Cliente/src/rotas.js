const express = require("express");
const rotas = express.Router();
const path= require("path");
const VendaControler = require("./Controller/VendaController");
const FormularioController = require("./Controller/clienteController");


rotas.get("/cadastro", VendaControler.produto);
rotas.post("/adicionar", VendaControler.registro);
rotas.get("/lista", VendaControler.lista);
rotas.get("/Produto.html", (req, res) => {
  const filePath = path.join(__dirname, "./views/viewsHtml/Produto.html");
  res.sendFile(filePath);
});

// tentativa de criar menu || rotas.get('/home', FormularioController.home);
rotas.get('/cad', FormularioController.cadastro);
rotas.post('/add', FormularioController.register);
rotas.get("/listacliente", FormularioController.lista);


rotas.get("/Cliente.html" , (req,res) =>{
  const filePath = path.join(__dirname, "./views/viewsHtml/Cliente.html");
  res.sendFile(filePath);
});

// tentativa de leitura BD || rotas.get('/ler',FormularioController.read);

rotas.get("/menu.html" , (req,res) =>{
  const filePath = path.join(__dirname, "./views/viewsHtml/menu.html");
  res.sendFile(filePath);
});

rotas.get("/listaDelete", FormularioController.telaDelete);
rotas.post("/deletar/:id", FormularioController.delete);

rotas.get("/listaUp", FormularioController.telaDeupdate);
rotas.post("/listaUp/:id", FormularioController.update);


module.exports = rotas;