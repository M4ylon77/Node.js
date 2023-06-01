const mongoose = require("mongoose");
const dbConfig = "mongodb+srv://maylon77:root@cluster0.rh84gdu.mongodb.net/pessoas?retryWrites=true&w=majority";
const conexao = mongoose.connect(dbConfig,{

    useNewUrlParser: true,
    useUnifiedTopology:true

});

module.exports = conexao;