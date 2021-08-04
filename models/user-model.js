const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/,
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;