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


// don't update counter if counter is set already
// always set the counter seq to the last object seq

module.exports = mongoose.model("Counter", CounterSchema);
