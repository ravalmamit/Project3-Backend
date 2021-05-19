const mongoose = require('../db/connection');

const ReviewSchema = new mongoose.Schema({
  name: String,
  review: String,
  Place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
  },
},
{ timestamps: true }
);

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
