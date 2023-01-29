const Slider = require('../models/slide');
const About = require('../models/about');
const Serv = require('../models/serv');
const Project = require('../models/project');
const Projectcateg = require('../models/projectcateg');
const Parten = require('../models/parten');
/***************************************** */
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.wood.com.sa", //replace with your email provider
    port: 143,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

/******************************************************************* */
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
exports.getContact = (req, res) => {
    res.render('main/contact')
}
exports.sendMail = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const msg = req.body.msg;
    const mail = {
        from: name,
        to: process.env.EMAIL,
        subject: subject,
        text: `from ${name} <${email}>\n ${subject} \n${msg}`
    };
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Something went wrong.");
        } else {
            res.status(200).send("Email successfully sent to recipient!");
        }
    });
};
