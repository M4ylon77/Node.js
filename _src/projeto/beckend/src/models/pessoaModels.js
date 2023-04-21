const mongoose = require("mongoose");

const pessoaModelsSchema = new mongoose.Schema({

    Nome: String,
    Idade: Number,
    Cpf: String,
    Sexo: String



});

module.exports = mongoose.model("dados" , pessoaModelsSchema);//aqui damos o nome da tabela 