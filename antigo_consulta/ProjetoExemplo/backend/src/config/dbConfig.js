// mongodb+srv://saviokane:<password>@cluster0.eh6v9tx.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
const dbConfig = "mongodb://0.0.0.0:27017/anotacoes";
const conexao = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    UseUnifiedTopology: true
});

module.exports = conexao;