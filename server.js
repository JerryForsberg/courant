const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes/index.js");
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:3000"
}
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport init
// Express Session
app.set('trust proxy', 1)
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
    cookie: { secure: false },
    // store: new MongoStore({
    //   url: config.urlMongo,
    //   collection: 'sessions'
    // })
  })
);

//setting up cors to interact with front end
app.use(cors(corsOptions));

// Passport init
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
