const router = require("express").Router();
const userRoutes = require("./users");
const storyRoutes = require("./stories")

// user routes
router.use("/user", userRoutes);

//vehicle routes
router.use("/story", storyRoutes);

module.exports = router;