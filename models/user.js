const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const passport = require("passport");

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        trim: true,
    },
    stories: [
        {
            type: Schema.Types.ObjectId,
            ref: "Story"
        }
    ]
});

// checks if unhashed entered password matches the hashed password in the database
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// hashes user password before saving a new user
UserSchema.pre("save", function (next) {
    if (this.isNew) {
        this.password = bcrypt.hashSync(
            this.password,
            bcrypt.genSaltSync(10),
            null
        );
        next();
    } else {
        next();
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
