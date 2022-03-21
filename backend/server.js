const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/users-routes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

// This middleware fixes CORS errors, you put this before all your routes so
// that it works on every route
app.use((req, res, next) => {
  // The second parameter is which domains should have access and * signifies
  // every domain
  res.setHeader("Access-Control-Allow-Origin", "*");

  // This specifies which headers the request sent by the browsers may have
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // This controls which HTTP methods may be used on the front end
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

mongoose
  .connect(
    "mongodb+srv://reavity:VJF1dka.xrf.xbn2vud@udemymern.toh7o.mongodb.net/mernProject?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((e) => {
    console.log(e);
  });
