const pedido = require("../model/pedidoModel");
const cliente = require("../model/clienteModel");
const produto = require("../model/produtoModel");

module.exports={
    async read(req,res){
        try{
            const pedidoList = await pedido.find();
            return res.json(pedidoList);
        }catch(err){
            return res.status(400).send({error: "Nenhum pedido realizado"});
        }
    },

    async create(req,res){
        
            const {cliente, produto} = req.body;
            const pedidorealizado = await pedido.create({
                cliente: cliente,
                //cpfCliente: clienteEncontrado.cpf,
                //nomeCliente: clienteEncontrado.nome,
                produto: produto,
                //tipoProduto: produtoEncontrado.tipo,
                //marcaProduto: produtoEncontrado.marca,
                //valorProduto: produtoEncontrado.valor
            });
            return res.json(pedidorealizado);
        }
    }
