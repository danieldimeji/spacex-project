"use strict";

const axios = require("axios");

//get rockets data from SpaceX API
const getRockets = async () => {
  const res = await axios.get("https://api.spacexdata.com/v4/rockets");
  const rockets = [];
  res.data.forEach((rocket) => {
    rockets.push({
      rocketId: rocket.id,
      details: {
        name: rocket.name,
        description: rocket.description,
        status: rocket.active,
        images: rocket.flickr_images,
        first_flight: rocket.first_flight,
        company: rocket.company,
        country: rocket.country,
        wikipedia: rocket.wikipedia,
      },
      stages: {
        first_stage: rocket.first_stage,
        second_stage: rocket.second_stage,
      },
      properties: {
        height: rocket.height,
        diameter: rocket.diameter,
        mass: rocket.mass,
        boosters: rocket.boosters,
        stages: rocket.stages,
        engines: rocket.engines,
        landing_legs: rocket.landing_legs,
        payload_weights: rocket.payload_weights,
      },
      cost_per_launch: rocket.cost_per_launch,
      success_rate_pct: rocket.success_rate_pct,
    });
  });
  return rockets;
};

const getDragons = async () => {
  const res = await axios.get("https://api.spacexdata.com/v4/dragons");
  const dragons = []
  res.data.forEach((dragon) => {
    dragons.push({
      dragonId: dragon.id,
      details: {
        name: dragon.name,
        description: dragon.description,
        type: dragon.type,
        active: dragon.active,
        images: dragon.flickr_images,
        first_flight: dragon.first_flight,
        crew_capacity: dragon.crew_capacity,
        orbit_duration_yr: dragon.orbit_duration_yr,
        wikipedia: dragon.wikipedia,
      },
      properties: {
        diameter: dragon.diameter,
        sidewall_angle_deg: dragon.sidewall_angle_deg,
        dry_mass_kg: dragon.dry_mass_kg,
        dry_mass_lb: dragon.dry_mass_lb,
        thrusters: dragon.thrusters,
        heat_shield: dragon.heat_shield,
        launch_payload_mass: dragon.launch_payload_mass,
        launch_payload_vol: dragon.launch_payload_vol,
        return_payload_mass: dragon.return_payload_mass,
        return_payload_vol: dragon.return_payload_vol,
        pressurized_capsule: dragon.pressurized_capsule,
        trunk: dragon.trunk,
        height_w_trunk: dragon.height_w_trunk,
      }
    });
  });
  return dragons;
}

module.exports = {
  getRockets,
  getDragons,
};
