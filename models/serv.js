const mongoose = require('mongoose');
const servSchema = mongoose.Schema({
    img: String,
    content: {
        ar: String,
        en: String
    },
    title: {
        ar: String,
        en: String
    }
})

module.exports = mongoose.model('Serv', servSchema);