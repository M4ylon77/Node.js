const Cliente = require("../model/ClienteModel");
const path = require('path');
const fs = require('fs');


module.exports = {
    async cadastro (req,res){
       const filePath = path.join(__dirname,'../views/formulario.html')

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
            console.log("Cliente novo criado: ",clienteCreate.nome+" !!!");
            res.send("Nome: "+req.body.nome+
                 "<br>CPF: "+req.body.cpf+
                 "<br>Email: "+req.body.email+
                 "<br>Telefone: "+req.body.telefone+
                 "<br>Fidelidade: "+req.body.fidelidade);
           

    }
}