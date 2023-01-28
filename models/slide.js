const mongoose = require('mongoose');

const slideSchema = mongoose.Schema({
    img: String,
    title: {
        ar: String,
        en: String
    },
    caption: {
        ar: String,
        en: String
    }
})

module.exports = mongoose.model('Slide', slideSchema);