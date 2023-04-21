const express = require("express");
const app = express();
const rotas = require("./rotas")
//app.get("/hello",(req,res)=>{

  //  return res.send("OI, eu so quero amor nesse caralho !");

//});

require("./cofing/dbConfig.js");

app.use(express.json());
app.use(rotas);

app.listen(8081);