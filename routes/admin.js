const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin');

route.get('/', adminController.getMain);
/********************* slider */
route.post('/add-slide', adminController.addSlider);
route.get('/remove-slide/:sId', adminController.removeSlide);
/************************** about *********************************** */
route.post('/about', adminController.about);
/********************************services *****************************/
route.post('/add-serv', adminController.addServ);
route.get('/remove-serv/:id', adminController.removeServ);
/****************************projects *********************************/
route.post('/add-project-categ', adminController.addProjectCateg);
route.get('/remove-project-categ/:id', adminController.removeProjectCateg);
route.post('/add-project', adminController.addProject)
route.get('/remove-project/:id', adminController.removeProject)
/*****************************parten ************************************/
route.post('/add-parten', adminController.addParten);
route.get('/remove-parten/:id', adminController.removeParten);
module.exports = route