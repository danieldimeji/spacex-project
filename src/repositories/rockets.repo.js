const axios = require("axios");

const SPACEX_API_URL = "https://api.spacexdata.com/v4/rockets";

async function getRockets() {
  const response = await axios.get(SPACEX_API_URL);
  const rockets = [];
  response.data.forEach((rocket) => {
    rockets.push({
      id: rocket.id,
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
        engines: rocket.engines,
        landing_legs: rocket.landing_legs,
        payload_weights: rocket.payload_weights,
      },
      cost_per_launch: rocket.cost_per_launch,
      success_rate_pct: rocket.success_rate_pct,
    });
  });
  return rockets;
}

module.exports = {
  getRockets,
};
