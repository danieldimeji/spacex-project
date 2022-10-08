"use strict";

const dragonsModel = require("../models/dragons.model");
// const spacexServices = require("../services/spacex");

const getDragons = async () => {
//   const spacexDragons = await spacexServices.getDragons();
//   await saveDragons(spacexDragons);
  const dragons = await dragonsModel.find({}, { _id: 0, dragonId: 0, __v: 0 });
  return dragons;
};

const getDragonsByQueryId = async (queryId) => {
    return await dragonsModel.findOne(
      { queryId: queryId },
      { _id: 0, dragonId: 0, __v: 0 }
    );
};

const saveDragons = async (dragons) => {
    for (const dragon of dragons) {
      await dragonsModel.findOneAndUpdate({ dragonId: dragon.dragonId }, dragon, {
        upsert: true,
      });
    }
    return dragons;
};

module.exports = {
  getDragons,
  getDragonsByQueryId,
  saveDragons,
};
