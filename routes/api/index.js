const router = require("express").Router();
const userRoutes = require("./users");

// user routes
router.use("/user", userRoutes);

module.exports = router;