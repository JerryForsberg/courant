const router = require("express").Router();
const userRoutes = require("./users");
const storyRoutes = requre("./stories")

// user routes
router.use("/user", userRoutes);

//vehicle routes
router.use("/story", storyRoutes);

module.exports = router;