const router = require("express").Router();
const userRoutes = require("./users");
const storyRoutes = require("./stories")
// const imageRoutes = require("./images")

// user routes
router.use("/user", userRoutes);

//vehicle routes
router.use("/story", storyRoutes);

// router.use("/images", imageRoutes )

module.exports = router;