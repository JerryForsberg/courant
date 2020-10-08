const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    stories: [
        {
            type: Schema.Types.ObjectId,
            ref: "Story"
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;