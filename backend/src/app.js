const express = require("express");
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json()); // Converter JSON em Objeto JS
app.use(routes);
app.use(errors());

module.exports = app;
