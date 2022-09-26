const express = require("express");
const rocketsRouter = require('./rockets.router')

const api = express.Router()

api.use('/rockets', rocketsRouter);

module.exports = api