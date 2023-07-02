const mongoose = require("mongoose");
//mongodb://0.0.0.0:27017/clientes
const dbConfig = "mongodb+srv://maylon77:root@cluster0.rh84gdu.mongodb.net/loja?retryWrites=true&w=majority";
const conexao = mongoose.connect(dbConfig,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

module.exports = conexao;