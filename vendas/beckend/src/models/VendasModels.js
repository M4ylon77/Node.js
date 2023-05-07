const mongoose = require("mongoose");

const VendasModelsSchema = new mongoose.Schema({

    id: Number,
    nome: String,
    valor: Number



});


module.exports = mongoose.model("vendas", VendasModelsSchema);