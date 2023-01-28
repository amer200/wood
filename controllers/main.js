const Slider = require('../models/slide');
const About = require('../models/about');
const Serv = require('../models/serv');
const Project = require('../models/project');
const Projectcateg = require('../models/projectcateg');

exports.getMain = async (req, res) => {
    const slides = await Slider.find();
    const about = await About.findOne();
    const servs = await Serv.find();
    const projects = await Project.find().populate('categ');
    const projectcateg = await Projectcateg.find();
    res.render('main/index', {
        slides: slides,
        about: about,
        servs: servs,
        projects: projects,
        categs: projectcateg,
    });
}