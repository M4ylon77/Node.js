const Vendas = require("../models/VendasModels");
module.exports={

    async read(req,res){
    const Vendaslist = await Vendas.find();
    return res.json(Vendaslist);
    
    }



}