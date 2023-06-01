const mongoose = require("mongoose");
const dbCofing = "mongodb://0.0.0.0:27017/";

const conexao = mongoose.connect(dbCofing,{
    useNewUrlParser: true,
    useUnifiedTopology: true

});

module.exports= conexao;

