const express = require("express");
const router = express.Router();

// import the place model
const Place = require("../models/place-model");

// Index: GET all the places
router.get("/", (req, res) => {
  Place.find({})
    .then((places) => res.json(places))
    .catch(console.error);
});

// Show: Get a Place by name
router.get('/:id', (req, res) => {
  Place.findById(req.params.id)
    .then((place) => {
      res.json(place)
    })
    .catch(console.error);
});

router.put('/:id', (req, res) => {
  Place.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(() => console.log("success"))
    .catch(console.error);
});

router.post('/', (req, res) => {
  Place.create(req.body)
    .then(() => console.log("success"))
    .catch(console.error);
});

router.delete('/:id', (req, res) => {
  Place.findOneAndDelete({ 
    _id: req.params.id
  })
    .then((gif) => console.log("success"))
    .catch(console.error);
});

module.exports = router;
