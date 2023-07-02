const Cliente = require("../models/clienteModels.js");

module.exports = {

    async read(req,res){
        const ClienteLista = await Cliente.find();
        return res.json(ClienteLista);


    },

    async create(req, res) {
      const { nome, idade, sexo, cpf, produtos } = req.body;
      const clienteCriado = await Cliente.create({
        nome,
        idade,
        sexo,
        cpf,
        produtos

        
      });

    
      
      return res.json(clienteCriado);
    
    
      },
      async delete(req,res){
        const {id} = req.params;
        const clienteDeletado = await Cliente.findOneAndDelete({_id: id});

        if (clienteDeletado){
          return res.json(clienteDeletado);

        }

      },
      async update(req,res){
        const {id} = req.params;
        const {nome, idade, sexo, cpf , produto_id} = req.body;
        const clienteUpdate = await Cliente.findOne({_id: id});

        clienteUpdate.nome = nome;
        clienteUpdate.idade = idade;
        clienteUpdate.sexo = sexo;
        clienteUpdate.cpf = cpf;
        clienteUpdate.produtos = [produto_id];
       

        await clienteUpdate.save();

        return res.json(clienteUpdate);

      }

      
      


    }

//meu atual
