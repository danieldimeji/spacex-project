const mongoose = require("mongoose");

var CounterSchema = new mongoose.Schema({
  _schemaId: {
    type: String,
    required: true,
  },
  _seq: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Counter", CounterSchema);
