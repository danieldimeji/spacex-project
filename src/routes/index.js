const express = require("express");
const router = express.Router();

const rocketController = require("../controllers/rockets.controller");

//rockets
router.get("/rockets", rocketController.list)


module.exports = router