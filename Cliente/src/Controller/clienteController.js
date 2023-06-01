const Cliente = require("../model/ClienteModel");
const path = require('path');
const fs = require("fs");
const { ClientRequest } = require("http");
const mongoose = require('mongoose');



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
        const {id,nome,cpf,email,telefone,fidelidade} = req.body;
        
        const clienteCreate = await Cliente.create ({
            id,
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
      deletar: async (req, res) => {

          const listacliente = await Cliente.find();
      
          const filePath = path.join(__dirname, '../views/listaDele.ejs');
    
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
            }
            res.render("listaDele" , { listacliente });// Envia a resposta somente após ler o arquivo
          });
          


        
        
      },
    
      delete: async (req, res) => {
        const { id } = req.body;
        try {
          console.log('ID recebido:', id);
    const objectId = new mongoose.Types.ObjectId(id.toString().padStart(null, '0'));
    console.log('ObjectId criado:', objectId);
    const pessoaDeletada = await Cliente.findOneAndDelete({ _id: objectId });

      
                
          if (pessoaDeletada) {
            console.log('Cliente excluído:', pessoaDeletada);
            return res.redirect('/menu.html');
          } else {
            return res.status(404).json({ message: 'Cliente não encontrado.' });
          }
        } catch (error) {
          console.error('Erro ao excluir cliente:', error);
          return res.status(500).json({ message: 'Ocorreu um erro ao processar a solicitação.' });
        }
      }
      
    
}
    
  
    
  
  


