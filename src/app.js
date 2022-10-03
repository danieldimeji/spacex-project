const express = require("express");
const morgan = require("morgan");

const router = require("./routes");

const app = express();

app.use(morgan("combined"));
app.use(express.json());

app.use("/v1", router);

module.exports = app;
