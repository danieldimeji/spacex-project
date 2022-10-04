"use strict";

const mongoose = require("mongoose");
const { setQueryId } = require("../helpers/query.helper");

const rocketSchema = new mongoose.Schema({
  queryId: {
    type: Number,
    default: 0,
  },
  rocketId: {
    type: String,
    required: true,
  },
  details: {
    name: String,
    description: String,
    status: String,
    image: [String],
    first_flight: Date,
    company: String,
    country: String,
  },
  stages: {
    first_stage: {
      thrust_sea_level: {
        kN: Number,
        lbf: Number,
      },
      thrust_vacuum: {
        kN: Number,
        lbf: Number,
      },
      reusable: Boolean,
      engines: Number,
      fuel_amount_tons: Number,
      burn_time_sec: Number,
    },
    second_stage: {
      thrust: {
        kN: Number,
        lbf: Number,
      },
      payloads: {
        composite_fairing: {
          height: {
            meters: Number,
            feet: Number,
          },
          diameter: {
            meters: Number,
            feet: Number,
          },
        },
        option_1: String,
      },
      reusable: Boolean,
      engines: Number,
      fuel_amount_tons: Number,
      burn_time_sec: Number,
    },
  },
  properties: {
    height: {
      meters: Number,
      feet: Number,
    },
    diameter: {
      meters: Number,
      feet: Number,
    },
    mass: {
      kg: Number,
      lb: Number,
    },
    boosters: Number,
    stages: Number,
    engines: {
      isp: {
        sea_level: Number,
        vacuum: Number,
      },
      thrust_sea_level: {
        kN: Number,
        lbf: Number,
      },
      thrust_vacuum: {
        kN: Number,
        lbf: Number,
      },
      number: Number,
      type: { type: String },
      version: String,
      layout: String,
      engine_loss_max: Number,
      propellant_1: String,
      propellant_2: String,
      thrust_to_weight: Number,
    },
    landing_legs: {
      number: Number,
      material: String,
    },
    payload_weights: [
      {
        id: String,
        name: String,
        kg: Number,
        lb: Number,
      },
    ],
  },
  cost_per_launch: Number,
  success_rate_pct: Number,
});

rocketSchema.post("findOneAndUpdate", async function () {
  const docToUpdate = await this.model.findOne(this.getQuery());
  if (docToUpdate !== null) {
    if (!docToUpdate.queryId || !docToUpdate.queryId === 0) {
      docToUpdate.queryId = await setQueryId("rocketSchema");
      docToUpdate.save();
    }
  }
});

module.exports = mongoose.model("Rocket", rocketSchema);
