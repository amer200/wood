const Slider = require('../models/slide');
const About = require('../models/about');
const Serv = require('../models/serv');
const Project = require('../models/project');
const Projectcateg = require('../models/projectcateg');
const Parten = require('../models/parten');
exports.getMain = async (req, res) => {
    const slides = await Slider.find();
    const about = await About.findOne();
    const servs = await Serv.find();
    const projects = await Project.find().populate('categ');
    const projectcateg = await Projectcateg.find();
    const parten = await Parten.find();
    res.render('main/index', {
        slides: slides,
        about: about,
        servs: servs,
        projects: projects,
        categs: projectcateg,
        partens: parten
    });
}
exports.getAbout = async (req, res) => {
    const about = await About.findOne();
    res.render('main/about', {
        about: about
    })
}
exports.getServ = async (req, res) => {
    const servs = await Serv.find();
    const parten = await Parten.find();
    res.render('main/service', {
        servs: servs,
        partens: parten
    })
}
exports.getProjects = async (req, res) => {
    const projects = await Project.find().populate('categ');
    const projectcateg = await Projectcateg.find();
    res.render('main/project', {
        projects: projects,
        categs: projectcateg
    })
}