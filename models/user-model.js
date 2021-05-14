//models/user-model.js

const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({}, { timestamps: true });

// Make sure to name the model with the singular User!
// Mongoose pluralizes and lowercases the name of the model
// to name the collection of documents in the database that
// correspond to this model.

const User = mongoose.model("User", UserSchema);

module.exports = User;
