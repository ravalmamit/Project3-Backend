const express = require("express");
const router = express.Router();

// import the review model
const Reviews = require("../models/review-model");

// Index: GET all places in database
router.get("/", (req, res) => {
  Reviews.find({})
  .then((review) => res.json(review))
  .catch(console.error);
});

// Create: Create a new review for a specific place
router.post('/', (req, res) => {
  console.log(req.body)
  Reviews.create(req.body)
  .then((review) => res.json(review))
  .catch(console.error);
});





module.exports = router;