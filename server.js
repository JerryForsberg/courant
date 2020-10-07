// require all needed dependencies
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// setting up port
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport init
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);
// initialize
app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/courant");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
