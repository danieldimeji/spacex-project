"use strict";

const axios = require("axios");

// get rockets data from SpaceX API 
const getRockets = async () => {
  const res = await axios.get('https://api.spacexdata.com/v4/rockets');
  const rockets = [];
  res.data.forEach((rocket) => {
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
    });
  });
  return rockets
};

module.exports = {
  getRockets,
};
