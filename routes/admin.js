const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin');
const authController = require('../auth/isAdmin');
route.get('/', authController.isAdmin, adminController.getMain);
/**meta */
route.post('/meta', authController.isAdmin, adminController.Meta);
/********************* slider */
route.post('/add-slide', authController.isAdmin, adminController.addSlider);
route.get('/remove-slide/:sId', authController.isAdmin, adminController.removeSlide);
/************************** about *********************************** */
route.post('/about', authController.isAdmin, adminController.about);
/********************************services *****************************/
route.post('/add-serv', adminController.addServ);
route.get('/remove-serv/:id', authController.isAdmin, adminController.removeServ);
route.post('/edit-serv/:id', authController.isAdmin, adminController.editServ);
/****************************projects *********************************/
route.post('/add-project-categ', authController.isAdmin, adminController.addProjectCateg);
route.get('/remove-project-categ/:id', authController.isAdmin, adminController.removeProjectCateg);
route.post('/add-project', authController.isAdmin, adminController.addProject)
route.get('/remove-project/:id', authController.isAdmin, adminController.removeProject)
/*****************************parten ************************************/
route.post('/add-parten', authController.isAdmin, adminController.addParten);
route.get('/remove-parten/:id', authController.isAdmin, adminController.removeParten);
/*****************************why ****************************************/
route.post('/why', authController.isAdmin, adminController.postWhy);
/*****************************social **************************************/
route.post('/social', authController.isAdmin, adminController.postSocial);
/*****************************admin ********************************/
route.post('/admin-pass', authController.isAdmin, adminController.password);
/*********************************************************************************** */
route.get('/login', adminController.getAdminLogin);
route.post('/login', adminController.postAdminLogin);
route.get('/signout', adminController.adminLogOut);
module.exports = route