const express = require("express");
const router = express.Router();

// import the place model
const Place = require("../models/place-model");

// express.Router({ caseSensitive: true });

// Index: GET all places in database
router.get("/", (req, res, next) => {
  Place.find({})
    .then((places) => res.json(places))
    .catch(next);
});

// Index: GET all the restaurants
router.get("/restaurants", (req, res, next) => {
  Place.find({ types: "restaurant" })
    .then((places) => res.json(places))
    .catch(next);
});

// Index: GET all the cafes
router.get("/cafes", (req, res, next) => {
  Place.find({ types: "cafe" })
    .then((places) => res.json(places))
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
  //   Place.find({ name: req.params.names })
  Place.find({ name: { $regex: req.params.names, $options: "i" } })
    .then((places) => res.json(places))
    .catch(next);
});

// Index: place by id #
router.get("/spot/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then((place) => res.json(place))
    .catch(next);
});

// Show: Get a Place by name

module.exports = router;
