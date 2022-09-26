const { getRockets} = require("../repositories/rockets.repo");

async function list(req, res) {
  const rockets = await getRockets();
  return res.status(200).json(rockets);
}

module.exports = {
  list
};
