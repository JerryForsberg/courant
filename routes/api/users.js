const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const path = require("path");


// User Routes ----------------------------------------------- ||
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});


// Signup and create a user, references the user model requirements
router.post("/signup", (req, res) => {
  console.log(req.body);
  db.User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((dbUser) => {
      res.json({
        username: dbUser.username,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

  
// logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// checks and returns whether or not the user is authenticated
router.get("/isAuthenticated", function (req, res) {
  if (req.user) {
    res.json({ isAuthenticated: true })
  }
  else {
    res.json({ isAuthenticated: false })
  }
});

// Endpoint to get current user
router.get("/info", isAuthenticated, function (req, res) {
  db.User.findOne({ _id: req.user._id })
    // .populate({
    //   path: "vehicles",
    //   model: "Vehicle",
    //   populate: { path: "warranties", model: "Warranty" },
    // })
    .then((dbUser) => res.json(dbUser))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;