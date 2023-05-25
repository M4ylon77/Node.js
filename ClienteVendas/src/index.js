const express = require("express");
const rotas = require("./rotas");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.json());
app.use(rotas);
require = require("./Config/dbConfig");

app.listen(8081);

