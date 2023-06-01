const mogoose = require("mongoose");

const mongoModelSchema = mogoose.Schema({
    id:String,
    nome:String,
    cpf:String,
    email:String,
    telefone:String,
    fidelidade:Boolean


});

module.exports = mogoose.model("clientes", mongoModelSchema);