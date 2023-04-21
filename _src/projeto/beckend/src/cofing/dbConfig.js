
const mongoose = require("mongoose");
const dbConfig = "mongodb+srv://maylon77:root@cluster0.rh84gdu.mongodb.net/dadoos?retryWrites=true&w=majority";// aqui damos o nome do banco de dados 

const conexao = mongoose.connect(dbConfig, {
useNewUrlParser: true,
useUnifiedTopology: true

});

module.exports = conexao;