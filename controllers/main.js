const Slider = require('../models/slide');
const About = require('../models/about');
const Serv = require('../models/serv');
const Project = require('../models/project');
const Projectcateg = require('../models/projectcateg');
const Parten = require('../models/parten');
const Why = require('../models/why-us');
const Meta = require('../models/meta');
/***************************************** */
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.wood.com.sa", //replace with your email provider
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
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
    const why = await Why.findOne();
    const meta = await Meta.findOne();
    let lang = 'ar'
    if (req.session.lang) {
        lang = req.session.lang;
    }
    res.render(`main-${lang}/index`, {
        slides: slides,
        about: about,
        servs: servs,
        projects: projects,
        categs: projectcateg,
        partens: parten,
        why: why,
        meta: meta
    });
}
exports.getAbout = async (req, res) => {
    const about = await About.findOne();
    const meta = await Meta.findOne();
    let lang = 'ar'
    if (req.session.lang) {
        lang = req.session.lang;
    }
    res.render(`main-${lang}/about`, {
        about: about,
        meta: meta
    })
}
exports.getServ = async (req, res) => {
    const servs = await Serv.find();
    const parten = await Parten.find();
    const meta = await Meta.findOne();
    let lang = 'ar'
    if (req.session.lang) {
        lang = req.session.lang;
    }
    res.render(`main-${lang}/service`, {
        servs: servs,
        partens: parten,
        meta: meta
    })
}
exports.getProjects = async (req, res) => {
    const projects = await Project.find().populate('categ');
    const projectcateg = await Projectcateg.find();
    const meta = await Meta.findOne();
    let lang = 'ar'
    if (req.session.lang) {
        lang = req.session.lang;
    }
    res.render(`main-${lang}/project`, {
        projects: projects,
        categs: projectcateg,
        meta: meta
    })
}
exports.getProject = async (req, res) => {
    const id = req.params.id;
    const project = await Project.findById(id);
    const meta = await Meta.findOne();
    let lang = 'ar'
    if (req.session.lang) {
        lang = req.session.lang;
    }
    console.log(project)
    res.render(`main-${lang}/single-project`, {
        p: project,
        meta: meta
    })
}
exports.getContact = async (req, res) => {
    const meta = await Meta.findOne();
    let lang = 'ar';
    if (req.session.lang) {
        lang = req.session.lang;
    }
    res.render(`main-${lang}/contact`,{
        meta: meta
    })
}
exports.sendMail = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const msg = req.body.msg;
    const mail = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: subject,
        text: `from ${name} <${email}>\n ${subject} \n${msg}`
    };
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Something went wrong.");
        } else {
            res.status(200).redirect('/');
        }
    });
};
/* lang */
exports.changeLang = (req, res) => {
    const l = req.params.l;
    req.session.lang = l;
    res.redirect('/')
}