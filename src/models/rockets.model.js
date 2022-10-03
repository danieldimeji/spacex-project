const mongoose = require("mongoose");

const rocketSchema = new mongoose.Schema({
  rocketId: {
    type: String,
    required: true,
  },
  details: new mongoose.Schema({
    name: String,
    description: String,
    status: String,
    image: [ String ],
    first_flight: String,  // change to date field
    company: String,
    country: String,
  }),
});

module.exports = mongoose.model("Rocket", rocketSchema);
