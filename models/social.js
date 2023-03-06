const mongoose = require('mongoose');

const socialSchema = mongoose.Schema({
    facebook: String,
    insta: String,
    youtube: String,
    twitter: String,
    snapchat: String,
    whats: String
})

module.exports = mongoose.model('Social', socialSchema);