const express = require("express");
const rocketController = require("../controllers/rockets.controller");

const router = express.Router();

router.get("/", rocketController.list);

module.exports = router;
