const mongoose = require("mongoose");

const clienteModulesSchema = new mongoose.Schema({

    nome: String,
    idade: Number,
    sexo: String,
    cpf: String,
    produtos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
      }]
      

});


module.exports = mongoose.model("listaC", clienteModulesSchema);