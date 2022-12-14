"use strict";

const counter = require("./counter.helper");

const setQueryId = async (schemaId) => {
  const counterSchema = await counter.getCounter(schemaId);
  let counterSeq = counter.getCounterSeq(counterSchema);
  const nextSeq = ++counterSeq;
  counter.updateCounterSeq(counterSchema, nextSeq);
  return nextSeq;
};

module.exports = {
  setQueryId,
};
