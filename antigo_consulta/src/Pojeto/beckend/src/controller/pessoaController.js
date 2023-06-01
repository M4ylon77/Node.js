const Pessoas =require("../models/pessoaModels");

module.exports={

    async read(req,res){
        const pessoaDados = await Pessoas.find();
        return res.json(pessoaDados);


    },

    async create(req,res){
        const{Cpf, Nome, Genero} = req.body;
        const PessoaCriada = await Pessoas.create({
            Cpf,
            Nome,
            Genero

        });
        return res.json(PessoaCriada);
    },
    async delete(req, res){
        const {id} =req.params;
        const PessoaDeletada = await Pessoas.findOneAndDelete({_id:id});
        if(PessoaDeletada){

            return res.json(PessoaDeletada);

        }


    }


}