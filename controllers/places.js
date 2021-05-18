const express = require("express");
const router = express.Router();

// import the place model
const Place = require("../models/place-model");

// express.Router({ caseSensitive: true });

// Index: GET all the restaurants
router.get("/restaurants", (req, res, next) => {
  // 1. Get all of the places from the DB
  Place.find({ types: "restaurant" })
    // 2. Send them back to the client as JSON
    .then((places) => res.json(places))
    // 3. If there's an error pass it on!
    .catch(next);
});

// Index: GET all the cafes
router.get("/cafes", (req, res, next) => {
  // 1. Get all of the places from the DB
  Place.find({ types: "cafe" })
    // 2. Send them back to the client as JSON
    .then((places) => res.json(places))
    // 3. If there's an error pass it on!
    .catch(next);
});

// Index: GET all the bars
router.get("/bars", (req, res, next) => {
  // 1. Get all of the places from the DB
  Place.find({ types: "bar" })
    // 2. Send them back to the client as JSON
    .then((places) => res.json(places))
    // 3. If there's an error pass it on!
    .catch(next);
});

// Index: GET all the stores
router.get("/stores", (req, res, next) => {
  // 1. Get all of the places from the DB
  Place.find({ types: "store" })
    // 2. Send them back to the client as JSON
    .then((places) => res.json(places))
    // 3. If there's an error pass it on!
    .catch(next);
});

// Index: GET all the places by name
router.get("/:names", (req, res, next) => {
  // 1. Get all of the places from the DB
  //   Place.find({ name: req.params.names })
  Place.find({ name: { $regex: req.params.names, $options: "i" } })
    // 2. Send them back to the client as JSON
    .then((places) => res.json(places))
    // 3. If there's an error pass it on!
    .catch(next);
});

// Show: Get a Place by name

module.exports = router;
