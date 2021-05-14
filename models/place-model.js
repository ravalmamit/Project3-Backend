//models/place-model.js

const mongoose = require("../db/connection");

const PlaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    geometry: {
      type: Object,
    },
    formatted_address: {
      type: String,
    },
    icon: {
      type: String,
    },
    photos: {
      type: Array,
    },
    rating: {
      type: Number,
    },
    types: {
      type: Array,
    },
    user_ratings_total: {
      type: Number,
    },
  },
  { timestamps: true }
);

// Make sure to name the model with the singular Place!
// Mongoose pluralizes and lowercases the name of the model
// to name the collection of documents in the database that
// correspond to this model.

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
