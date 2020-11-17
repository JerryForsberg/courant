const db = require("../models");

module.exports = {
    // find all stories for that specific user
    findAllStories: function (req, res) {
        db.Story.find({ user: req.user._id})
          .then((dbStory) => res.json(dbStory))
          .catch((err) => res.status(422).json(err));
    },

    // ------ UNSURE IF NEEDED ------- //
    // findById: function (req, res) {
    //     db.Story.find({ _id: req.params.id })
    //       .then((dbStory) => res.json(dbStory))
    //       .catch((err) => res.status(422).json(err));
    //   },

    create: function (req, res) {
        db.Story.create({
            user: req.user._id,
            author: req.body.author,
            title: req.body.title,
            textUpload: req.body.textUpload,
            // imageUpload: req.body.imageUpload
        })
        .then((dbStory) => {
            db.User.findOneAndUpdate(
            // find story and update if needed and push to that specific user
              { _id: req.user._id },
              { $push: { stories: dbStory._id } }
            );
            return res.json(dbStory);
          })
          .catch((err) => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Story.findOneAndDelete({ _id: req.params.id })
          .then((dbStory) => res.json(dbStory))
          .catch((err) => res.status(422).json(err));
      },

    update: function (req, res) {
        db.Story.findOneAndUpdate({ _id: req.params.id }, 
        req.body, { new: true })
        .then((dbStory) => res.json(dbStory))
        .catch((err) => res.status(422).json(err));
    },

}