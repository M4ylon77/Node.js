const mongoose = require("mongoose");

const ClientesModelsSchema = new mongoose.Schema({

    nome: String,
    idade: Number,
    sexo: String

});


module.exports= mongoose.Schema("clientes", ClientesModelsSchema);