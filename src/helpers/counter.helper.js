const counter = require("../models/counter.model");

const getCounter = async (schemaId) => {
  return await counter.findOneAndUpdate(
    {
      _schemaId: schemaId,
    },
    { _schemaId: schemaId },
    {
      upsert: true,
      returnOriginal: false
    }
  );
};

const getCounterSeq = (counter) => {
  return counter._seq;
};

const updateCounterSeq = async (counter, seq) => {
  counter._seq = seq;
  counter.save();
};

module.exports = {
  getCounter,
  getCounterSeq,
  updateCounterSeq,
};
