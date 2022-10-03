const rocketsModel = require("../models/rockets.model");
const spacexServices = require("../services/spacex")

const saveRocket = async (rocket) => {
  await rocketsModel.findOneAndUpdate(
    {
      rocketId: rocket.id,
    },
    rocket,
    {
      upsert: true,
    }
  );
  console.log("Rocket saved to DB")
}

module.exports = {
  saveRocket,
};
