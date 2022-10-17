"use strict";

const axios = require("axios");

//get rockets data from SpaceX API
const getRockets = async () => {
  const res = await axios.get("https://api.spacexdata.com/v4/rockets");
  const rockets = [];
  res.data.forEach((rocket) => {
    rockets.push({
      rocketId: rocket.id,
      details: {
        name: rocket.name,
        description: rocket.description,
        status: rocket.active,
        images: rocket.flickr_images,
        first_flight: rocket.first_flight,
        company: rocket.company,
        country: rocket.country,
        wikipedia: rocket.wikipedia,
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
        stages: rocket.stages,
        engines: rocket.engines,
        landing_legs: rocket.landing_legs,
        payload_weights: rocket.payload_weights,
      },
      cost_per_launch: rocket.cost_per_launch,
      success_rate_pct: rocket.success_rate_pct,
    });
  });
  return rockets;
};

//get dragons data from SpaceX API
const getDragons = async () => {
  const res = await axios.get("https://api.spacexdata.com/v4/dragons");
  const dragons = []
  res.data.forEach((dragon) => {
    dragons.push({
      dragonId: dragon.id,
      details: {
        name: dragon.name,
        description: dragon.description,
        type: dragon.type,
        active: dragon.active,
        images: dragon.flickr_images,
        first_flight: dragon.first_flight,
        crew_capacity: dragon.crew_capacity,
        orbit_duration_yr: dragon.orbit_duration_yr,
        wikipedia: dragon.wikipedia,
      },
      properties: {
        diameter: dragon.diameter,
        sidewall_angle_deg: dragon.sidewall_angle_deg,
        dry_mass_kg: dragon.dry_mass_kg,
        dry_mass_lb: dragon.dry_mass_lb,
        thrusters: dragon.thrusters,
        heat_shield: dragon.heat_shield,
        launch_payload_mass: dragon.launch_payload_mass,
        launch_payload_vol: dragon.launch_payload_vol,
        return_payload_mass: dragon.return_payload_mass,
        return_payload_vol: dragon.return_payload_vol,
        pressurized_capsule: dragon.pressurized_capsule,
        trunk: dragon.trunk,
        height_w_trunk: dragon.height_w_trunk,
      }
    });
  });
  return dragons;
}

//get dragons data from SpaceX API
const getStarlinkSats = async () => {
  const res = await axios.get("https://api.spacexdata.com/v4/starlink");
  const starlinkSats = []
  res.data.forEach((starlinksat) => {
    starlinksat.push({
      starlinksatId: starlinksat.id,
      starlinkSatlaunchId: starlinkSat.launch,
      properties: {
        version: starlinkSat.version,
        height_km: starlinkSat.height_km,
        latitude: starlinkSat.latitude,
        longitude: starlinkSat.longitude,
        velocity_kms: starlinkSat.velocity_kms
      },
      spaceTrack: {
        CCSDS_OMM_VERS: starlinkSat.CCSDS_OMM_VERS,
        COMMENT: starlinkSat.COMMENT,
        CREATION_DATE: starlinkSat.CREATION_DATE,
        ORIGINATOR: starlinkSat.ORIGINATOR,
        OBJECT_NAME: starlinkSat.OBJECT_NAME,
        OBJECT_ID: starlinkSat.OBJECT_ID,
        CENTER_NAME: starlinkSat.CENTER_NAME,
        REF_FRAME: starlinkSat.REF_FRAME,
        TIME_SYSTEM: starlinkSat.TIME_SYSTEM,
        MEAN_ELEMENT_THEORY: starlinkSat.MEAN_ELEMENT_THEORY,
        EPOCH: starlinkSat.EPOCH,
        MEAN_MOTION: starlinkSat.MEAN_MOTION,
        ECCENTRICITY: starlinkSat.ECCENTRICITY,
        INCLINATION: starlinkSat.INCLINATION,
        RA_OF_ASC_NODE: starlinkSat.RA_OF_ASC_NODE,
        ARG_OF_PERICENTER: starlinkSat.ARG_OF_PERICENTER,
        MEAN_ANOMALY: starlinkSat.MEAN_ANOMALY,
        EPHEMERIS_TYPE: starlinkSat.EPHEMERIS_TYPE,
        CLASSIFICATION_TYPE: starlinkSat.CLASSIFICATION_TYPE,
        NORAD_CAT_ID: starlinkSat.NORAD_CAT_ID,
        ELEMENT_SET_NO: starlinkSat.ELEMENT_SET_NO,
        REV_AT_EPOCH: starlinkSat.REV_AT_EPOCH,
        BSTAR: starlinkSat.BSTAR,
        MEAN_MOTION_DOT: starlinkSat.MEAN_MOTION_DOT,
        MEAN_MOTION_DDOT: starlinkSat.MEAN_MOTION_DDOT,
        SEMIMAJOR_AXIS: starlinkSat.SEMIMAJOR_AXIS,
        PERIOD: starlinkSat.PERIOD,
        APOAPSIS: starlinkSat.APOAPSIS,
        PERIAPSIS: starlinkSat.PERIAPSIS,
        OBJECT_TYPE: starlinkSat.OBJECT_TYPE,
        RCS_SIZE: starlinkSat.RCS_SIZE,
        COUNTRY_CODE: starlinkSat.COUNTRY_CODE,
        LAUNCH_DATE: starlinkSat.LAUNCH_DATE,
        SITE: starlinkSat.SITE,
        DECAY_DATE: starlinkSat.DECAY_DATE,
        DECAYED: starlinkSat.DECAYED,
        FILE: starlinkSat.FILE,
        GP_ID: starlinkSat.GP_ID,
        TLE_LINE0: starlinkSat.TLE_LINE0,
        TLE_LINE1: starlinkSat.TLE_LINE1,
        TLE_LINE2: starlinkSat.TLE_LINE2
      }
    });
  });
  return starlinkSats;
}

module.exports = {
  getRockets,
  getDragons,
  getStarlinkSats,
};
