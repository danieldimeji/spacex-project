"use strict";

const {
  getRockets,
  getRocketByQueryId,
} = require("../repositories/rockets.repo");

const list = async (req, res) => {
  const rockets = await getRockets();
  return res.json(rockets);
};

const detail = async (req, res) => {
  const rocket = await getRocketByQueryId(req.params.id);
  if (rocket === null) {
    return res.status(404).send("Not found");
  }
  return res.json(rocket);
};

module.exports = {
  list,
  detail,
};
