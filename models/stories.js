const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    textUpload: {type: String, required: true},
    imageUpload: {type: String},
    date: { type: Date, default: Date.now },


});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;