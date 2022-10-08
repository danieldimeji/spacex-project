"use strict";

const express = require("express");
const router = express.Router();

const rocketController = require("../controllers/rockets.controller");
const dragonController = require("../controllers/dragons.controller");


//rockets
router.get("/rockets", rocketController.list);
router.get("/rockets/:id", rocketController.detail);

//dragons
router.get("/dragons", dragonController.list);
router.get("/dragons/:id", dragonController.detail);


module.exports = router;
