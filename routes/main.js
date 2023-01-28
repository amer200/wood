const express = require('express');
const route = express.Router();
const mainController = require('../controllers/main');

route.get('/', mainController.getMain);

module.exports = route