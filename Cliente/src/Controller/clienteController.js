const Cliente = require("../model/ClienteModel");
const path = require('path');
const fs = require("fs");
const { ClientRequest } = require("http");


module.exports = {
    async cadastro (req,res){
       const filePath = path.join(__dirname,'../views/formularioCliente.html');

       fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo:', err);
          return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
        }
        res.set('Content-Type', 'text/html');
        res.send(data);
      });
    },

    async register (req,res){
        const {nome,cpf,email,telefone,fidelidade} = req.body;
        
        const clienteCreate = await Cliente.create ({
            nome,
            cpf,
            email,
            telefone,
            fidelidade
        });
            console.log("Cliente novo criado: "+ clienteCreate.nome+ " !!!");
            res.redirect("/menu.html");
           

    },
    async lista(req,res){
      try{
      const listacliente = await Cliente.find();


      res.render("listaCliente" , { listacliente });
      }
      catch (error){
        res.status(500).json({ message: 'Ocorreu um erro ao buscar a lista.' });

      }
      

    },
    async deletar(req,res){
      const {id} = req.params;
      const deletarCliente = await Cliente.findByIdAndDelete({_})


    }

}