const express = require("express");
const rotas = require("./rotas");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");

require("./Config/dbConfig");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static("./views"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(rotas);

app.listen(8081);


