const db = require("../models");
const imageMimeTypes = ["image/jpeg", "image/png", "images/gif"];

module.exports = {
  // find all stories for that specific user
  findAllStories: function (req, res) {
    db.Story
      .find({ user: req.user._id })
      .then((dbStory) => res.json(dbStory))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    console.log("req params: " + req.params.id)
    db.Story.findById(req.params.id)
      .then((dbStory) => res.json(dbStory))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    // var story;
    db.Story.create({
      user: req.user._id,
      author: req.body.author,
      title: req.body.title,
      // coverImage: req.body.coverImage,
      textUpload: req.body.textUpload
    })
      .then((dbStory) => {
        db.User.findOneAndUpdate(
          // find story and update if needed and push to that specific user
            { _id: req.user._id },
            { $push: { stories: dbStory._id } }
          );
          // console.log("This is dbstory: " + dbStory)
          return res.json(dbStory);
      })
      .catch((err) => res.status(422).json(err));
    // console.log("new story created", story);

    // function saveCover(story, coverEncoded) {
    //   if (coverEncoded == null) return
    //   const cover = JSON.parse(coverEncoded)
    //   if (cover != null && imageMimeTypes.includes(cover.type)) {
    //     story.coverImage = new Buffer.from(cover.data, "base64")
    //     story.coverImageType = cover.type
    //   }
    // }
    // saveCover(story, req.body.coverImage)

    // .then((dbStory) => {
    //   db.User.findOneAndUpdate(
    //     // find story and update if needed and push to that specific user
    //     { _id: req.user._id },
    //     { $push: { stories: dbStory._id } }
    //   );
    //   return res.json(dbStory);
    // })
    // .catch((err) => res.status(422).json(err));


  },

  remove: function (req, res) {
    db.Story
      .findById({ _id: req.params.id })
      .then((dbStory) => res.json(dbStory))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Story.findOneAndUpdate({ _id: req.params.id },
      req.body, { new: true })
      .then(dbStory => dbStory.remove())
      .then((dbStory) => res.json(dbStory))
      .catch((err) => res.status(422).json(err));
  }

}

