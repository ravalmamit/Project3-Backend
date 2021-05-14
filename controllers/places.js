const express = require("express");
const router = express.Router();

// import the place model
const Place = require("../models/place-model");

// Index: GET all the places
router.get("/", (req, res, next) => {
  // 1. Get all of the places from the DB
  Place.find({})
    // 2. Send them back to the client as JSON
    .then((places) => res.json(places))
    // 3. If there's an error pass it on!
    .catch(next);
});

// Show: Get a Place by name

module.exports = router;
