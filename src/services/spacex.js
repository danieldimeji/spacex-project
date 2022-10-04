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
        image: rocket.flickr_images,
        first_flight: rocket.first_flight,
        company: rocket.company,
        country: rocket.country,
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

module.exports = {
  getRockets,
};
