const rocketsModel = require("../models/rockets.model");
const spacexServices = require("../services/spacex");

const getRockets = async () => {
  const spaceRockets = await spacexServices.getRockets()
  await saveRockets(spaceRockets)
  const rockets = await rocketsModel.find({}, { rocketId: 0, __v: 0 });
  return rockets;
};

const saveRockets = async (rockets) => {
  for (const rocket of rockets) {
    await rocketsModel.findOneAndUpdate(
      {
        rocketId: rocket.rocketId,
      },
      rocket,
      {
        upsert: true,
      }
    );
  }
};

module.exports = {
  getRockets,
  saveRockets,
};
