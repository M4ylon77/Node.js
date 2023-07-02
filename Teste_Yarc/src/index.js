const express = require("express");
const app = express();
const rota = require("./rotas.js");

app.use(express.json());
app.use(rota);
require("./cofingDB/cofingDb");

app.listen(8081);

