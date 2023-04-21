const Pessoa = require("../models/pessoaModels");

module.exports={
async read(req,res){
    const pessoaFala = await Pessoa.find();
    return res.json(pessoaFala);


},

async create(req,res){
const {Nome, Idade, Cpf, Sexo} = req.body;

const pessoaCriada = await Pessoa.create({
    
    Nome,
    Idade,
    Cpf,
    Sexo



        });

        return res.json(pessoaCriada);

    },

    async delete (req,res){
        const {id} = req.params;
        const pessoaDeletada = await Pessoa.findOneAndDelete({_id : id});
        if(pessoaDeletada){

            return res.json(pessoaDeletada);

        } 


    },


    async update(req,res){
        const {id} = req.params;
        const {Nome, Idade, Cpf, Sexo} = req.body;
        const Pessoas = await Pessoa.findOne({_id:id});

        Pessoas.Nome = Nome;
        Pessoas.Idade = Idade;
        Pessoas.Cpf = Cpf;
        Pessoas.Sexo = Sexo;

        await Pessoas.save();

        return res.json(Pessoas);

    }





}