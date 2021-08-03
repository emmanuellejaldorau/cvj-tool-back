const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    fullName: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/,
    },
    phone: { type: Number, required: true },
    status: { type: String },
}, {
    // additional settings for Schema constructor function (class)
    timestamps: true,
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;