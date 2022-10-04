const { getRockets } = require("../repositories/rockets.repo");

const list = async (req, res) => {
  const rockets = await getRockets();
  return res.json(rockets);
}

module.exports = {
  list
};
