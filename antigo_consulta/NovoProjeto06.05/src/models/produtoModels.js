const mongoose = require("mongoose");

const produtoModulesSchema = mongoose.Schema({

    nome: String,
    ide: Number,
    marca: String,
    valor: Number,
    clientes:[{        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
      }]
      

});


module.exports = mongoose.model("listaP", produtoModulesSchema);