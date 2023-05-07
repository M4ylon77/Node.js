const Anotacoes = require("../models/AnotacaoModes");
module.exports ={

    async read (req, res){

const anotacoesList = await Anotacoes.find();
return res.json(anotacoesList);

    },
async create(req, res){

    const{titulo, notas , prioridade} = req.body;
    const anotacaoCriada = await Anotacoes.create({
        titulo,
        notas,
        prioridade         
    });

    return res.json(anotacaoCriada);    
    //console.log(req.body);

}

}

