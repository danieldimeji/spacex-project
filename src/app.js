const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/api");

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use("/v1", routes);

module.exports = app;
