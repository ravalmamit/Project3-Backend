const express = require("express");
const router = express.Router();

// import the place model
const Place = require("../models/place-model");

// express.Router({ caseSensitive: true });

// Index: GET all places in database
router.get("/", (req, res, next) => {
  Place.find({})
    .populate('reviews')
    .then((places) => res.json(places))
    .catch(next);
});

// Index: GET all the restaurants
router.get("/restaurants", (req, res, next) => {
  Place.find({ types: "restaurant" })
    .populate('reviews')
    .then((places) => res.json(places))
    .catch(next);
});

// Index: GET all the cafes
router.get("/cafes", (req, res, next) => {
  Place.find({ types: "cafe" })
    .populate('reviews')
    .then((places) => res.json(places))
    .catch(next);
});

// Index: GET all the bars
router.get("/bars", (req, res, next) => {
  Place.find({ types: "bar" })
    .populate('reviews')
    .then((places) => res.json(places))
    .catch(next);
});

// Index: GET all the stores
router.get("/stores", (req, res, next) => {
  Place.find({ types: "store" })
    .populate('reviews')
    .then((places) => res.json(places))
    .catch(next);
});

// Index: GET all the places by name
router.get("/:names", (req, res, next) => {
  //   Place.find({ name: req.params.names })
  Place.find({ name: { $regex: req.params.names, $options: "i" } })
    .populate('reviews')
    .then((places) => res.json(places))
    .catch(next);
});

// Update: Find a place in the DB and and update
router.put('/:name', (req, res) => {
  console.log(req.body)
  const placeName = req.params.name
  Place.findOneAndUpdate(
    { 
      name: { $regex: placeName, $options: "i" } 
    }, 
      req.body, 
    { 
      new: true 
    })
    .then(console.log(res.body))
    .catch(console.error);
});

// Index: place by id #
// router.get("/spot/:id", (req, res, next) => {
//   Place.findById(req.params.id)
//     .then((place) => res.json(place))
//     .catch(next);
// });

// Show: Get a Place by name

module.exports = router;
