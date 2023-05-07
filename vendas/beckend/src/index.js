const express = require("express");
const app = express();
const rotas = require("./rota.js");

app.use(express.json());
app.use(rotas);
require("./cofing/dbCofing");





app.listen(8081);