const Venda = require("../model/VendaModel");
const path = require("path");
const fs = require("fs");

module.exports = {

 async produto(req,res){
  const pathFile = path.join(__dirname, "../views/formularioVenda.html");

  fs.readFile(pathFile, "utf-8", (err, data) => {

    if(err){
        console.log("ta dando erro no seu produto");
        return res.status(500).send("cara nao ta dando certo isso nao ta ");
    }
    res.set("Content-Type", "text/html");  
    res.send(data);

  });
},
async  registro(req, res) {

    const { nome, marca, valor } = req.body;
    const criaProduto = await Venda.create({
      nome,
      marca,
      valor
    });
    console.log("produto adicionado"+ criaProduto.nome);
    res.redirect('/menu.html');
  },

  async lista(req, res) {
    try {
      // Buscar todos os itens no MongoDB
      const listaDeItens = await Venda.find();
  
      // Renderizar o template EJS com os dados da lista
      res.render("listaProduto", { listaDeItens });
    } catch (error) {
      // Trata erros caso ocorra algum problema
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro ao buscar a lista.' });
    }
  }
  
  
  
  
  }



 








