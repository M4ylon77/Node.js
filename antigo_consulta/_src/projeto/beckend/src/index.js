const express = require("express");
const app = express();
const rotas = require("./rotas");
//app.get("/oi", (req, res)=>{

  //  return res.send("ola mundo incrivel mugwara!");

//});

require("./cofing/dbConfig.js");

app.use(express.json());
app.use(rotas);

app.listen(8081);

