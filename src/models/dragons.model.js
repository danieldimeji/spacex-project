"use strict";

const mongoose = require("mongoose");
const { setQueryId } = require("../helpers/query.helper");

const dragonSchema = new mongoose.Schema({
  queryId: {
    type: Number,
    unique: true,
    default: 0,
  },
  dragonId: {
    type: String,
    required: true,
  },
  details: {
    name: String,
    description: String,
    type: { type: String },
    active: Boolean,
    images: [String],
    first_flight: Date,
    crew_capacity: Number,
    orbit_duration_yr: Number,
    wikipedia: String,
  },
  properties: {
    diameter: {
      meters: Number,
      feet: Number,
    },
    sidewall_angle_deg: Number,
    dry_mass_kg: Number,
    dry_mass_lb: Number,
    thrusters: [
      {
        type: { type: String },
        amount: Number,
        pods: Number,
        fuel_1: String,
        fuel_2: String,
        isp: Number,
        thrust: {
          kN: Number,
          lbf: Number,
        },
      },
    ],
    heat_shield: {
      material: String,
      size_meters: Number,
      temp_degrees: Number,
      dev_partner: String,
    },
    launch_payload_mass: {
      kg: Number,
      lb: Number,
    },
    launch_payload_vol: {
      cubic_meters: Number,
      cubic_feet: Number,
    },
    return_payload_mass: {
      kg: Number,
      lb: Number,
    },
    return_payload_vol: {
      cubic_meters: Number,
      cubic_feet: Number,
    },
    pressurized_capsule: {
      payload_volume: {
        cubic_meters: Number,
        cubic_feet: Number,
      },
    },
    trunk: {
      trunk_volume: {
        cubic_meters: Number,
        cubic_feet: Number,
      },
      cargo: {
        solar_array: Number,
        unpressurized_cargo: Boolean,
      },
    },
    height_w_trunk: {
      meters: Number,
      feet: Number,
    },
  },
});

dragonSchema.post("findOneAndUpdate", async function () {
  const doc = await this.model.findOne(this.getQuery());
  if (doc !== null) {
    if (!doc.queryId || doc.queryId === 0) {
      doc.queryId = await setQueryId("dragonCounter");
      doc.save();
    }
  }
});

module.exports = mongoose.model("Dragon", dragonSchema);
