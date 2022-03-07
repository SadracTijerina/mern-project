const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/users-routes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

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
    "mongodb+srv://reavity:VJF1dka.xrf.xbn2vud@udemymern.toh7o.mongodb.net/places?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((e) => {
    console.log(e);
  });
