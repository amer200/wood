const express = require('express');
const route = express.Router();
const mainController = require('../controllers/main');

route.get('/', mainController.getMain);
route.get('/about', mainController.getAbout);
route.get('/service', mainController.getServ);
route.get('/project', mainController.getProjects);
route.get('/contact', mainController.getContact);
route.post('/send-mail', mainController.sendMail);
route.get('/lang/:l', mainController.changeLang);
module.exports = route