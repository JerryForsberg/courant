const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
    author: { type: String, required: true },
    title: { type: String, required: true },
    // tags: { type: [String]},
    textUpload: String,
    // imageUpload: { type: String },
    date: { type: Date, default: Date.now },
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;