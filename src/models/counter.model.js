const mongoose = require("mongoose");

var CounterSchema = new mongoose.Schema({
  _schemaId: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});


// create a function setQueryId
// gets the current counter seq for the schema
// set the counter seq for the schema
// update the counter seq for the schema
// always set the counter seq to the last object seq

module.exports = mongoose.model("Counter", CounterSchema);
