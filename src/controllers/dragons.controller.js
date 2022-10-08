"use strict";

const {
  getDragons,
  getDragonsByQueryId,
} = require("../repositories/dragons.repo");

const list = async (req, res) => {
  const dragons = await getDragons();
  return res.json(dragons);
};

const detail = async (req, res) => {
  const dragon = await getDragonsByQueryId(req.params.id);
  if (dragon === null) {
    return res.status(404).send("Not found");
  }
  return res.json(dragon);
};

module.exports = {
  list,
  detail,
};
