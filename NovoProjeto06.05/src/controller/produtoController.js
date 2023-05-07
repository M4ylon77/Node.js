const Produto = require("../models/produtoModels");

module.exports={

    async read(req,res){
        const ProdutoLista = await Produto.find();
        return res.json(ProdutoLista);


    },

    async create(req,res){
        const {nome, ide, marca, valor, cliente_id} = req.body;
        const produtoCriado = await Produto.create({

            nome,
            ide,
            marca,
            valor,
            clientes: [cliente_id]


        });
        return res.json(produtoCriado);
    },

    async delete(req,res){
        const {id} = req.params;
        const produtoDeletado = await Produto.findOneAndDelete({_id:id});

        if (produtoDeletado){
            return res.json(produtoDeletado);
        }

    },

    async update(req,res){
        const {id} = req.params;
        const { nome, ide, marca, valor } =req.body;
        const produtoUpdate = await Produto.findOne({_id:id});

        produtoUpdate.nome = nome;
        produtoUpdate.ide = ide;
        produtoUpdate.marca =marca;
        produtoUpdate.valor = valor;

        await produtoUpdate.save();

        return res.json(produtoUpdate);


    }



}