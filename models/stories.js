const mongoose = require("mongoose").set('debug', true);
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  author: { type: String, required: true },
  title: { type: String, required: true },
  coverImage: {
    type: Buffer,
    required: true
  },
  textUpload: String,
  coverImageType: {
    type: String,

  },
  date: { type: Date, default: Date.now },
});

StorySchema.virtual("coverImagePath").get(function () {
  if (this.coverImage != null && this.coverImageType != null) {
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString("base64")}`
  }
})

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;