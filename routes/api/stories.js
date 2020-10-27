const router = require("express").Router();
const storyController = require("../../controllers/storyController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.use(isAuthenticated);

router
  .route("/")
  // creates story
  .post(storyController.create)
  // returns all stories of the logged in user
  .get(storyController.findAllStories);

router
  .route("/:id")
  // gets single story by id
//   .get(storyController.findById)
  // update story
  .put(storyController.update)
  //delete story
  .delete(storyController.remove);

module.exports = router;