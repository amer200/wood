const mongoose = require('mongoose');


const metaSchema = mongoose.Schema({
    ar: String,
    en: String
})

module.exports = mongoose.model('Meta', metaSchema);
