const mongoose = require("mongoose");

const pessoaModelsSchema = new mongoose.Schema({

    Cpf: String,
    Nome: String,
    Genero: String


});

module.exports = mongoose.model("Pessoa", pessoaModelsSchema);