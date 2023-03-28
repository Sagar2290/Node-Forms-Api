const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const formRoutes = require("./routes/form");

app.use(formRoutes);

app.listen(3000);
