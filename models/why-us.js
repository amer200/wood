const mongoose = require('mongoose');

const whySchema = mongoose.Schema({
    ar: String,
    en: String,
    img: String
})

module.exports = mongoose.model('Why', whySchema);