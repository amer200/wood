const mongoose = require('mongoose');

const partenSchema = mongoose.Schema({
    name: {
        ar: String,
        en: String
    },
    img: String,
    caption: {
        ar: String,
        en: String
    }
})

module.exports = mongoose.model('Parten', partenSchema);