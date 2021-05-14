// index.js
// Require express
const express = require("express");
// Use express to instantiate our app
const app = express();

// Require cors and use it!
const cors = require("cors");
app.use(cors());

// Use middleware to parse the data in the HTTP request body and add
// a property of body to the request object containing a POJO with with data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/api/places");
});

/* START ROUTE CONTROLLERS */
const placesController = require("./controllers/places");
app.use("/api/places", placesController);

const usersController = require("./controllers/users");
app.use("/api/users", usersController);

/* END ROUTE CONTROLLERS */

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).send(message);
});

// Create a variable for our port
const port = process.env.PORT || 4000;

// Run our server!
app.listen(port, () => {
  console.log(`Express MVC app is running on port ${port}`);
});
