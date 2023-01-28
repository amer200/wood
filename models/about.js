const mongoose = require('mongoose');
const aboutSchema = mongoose.Schema({
    en: {
        type: String,
        default: 'content'
    },
    ar: {
        type: String,
        default: 'content'
    },
    clints: Number,
    projects: Number,
    img: String
})

module.exports = mongoose.model('About', aboutSchema);