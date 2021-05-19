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
    reviews: [{
      // References use the type ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // the name of the model to which they refer
      ref: 'Review',
    }],
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
