const mongoose = require("mongoose");
const VendaModelSchema = new mongoose.Schema({

    nome: String,
    marca: String,
    valor: Number
    


});

module.exports = mongoose.model("Venda",VendaModelSchema);