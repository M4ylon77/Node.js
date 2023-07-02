const mogoose = require("mongoose");

const mongoModelSchema = new mogoose.Schema({

    nome:String,
    cpf:String,
    email:String,
    telefone:String,
    fidelidade:Boolean


});

module.exports = mogoose.model("clientes", mongoModelSchema);