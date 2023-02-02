const Slider = require('../models/slide');
const About = require('../models/about');
const Serv = require('../models/serv');
const Project = require('../models/project');
const Projectcateg = require('../models/projectcateg');
const Parten = require('../models/parten');
const fs = require('fs');
exports.getMain = async (req, res) => {
    const slides = await Slider.find();
    const about = await About.findOne();
    const servs = await Serv.find();
    const projects = await Project.find();
    const projectcateg = await Projectcateg.find();
    const parten = await Parten.find();
    res.render('admin/index', {
        slides: slides,
        about: about,
        servs: servs,
        projects: projects,
        categs: projectcateg,
        parten: parten
    });
}
/* slider  start*/
exports.addSlider = (req, res) => {
    const ar = req.body.ar;
    const en = req.body.en;
    const img = req.file.path.split('public')[1];
    const slide = new Slider({
        ar: ar,
        en: en,
        img: img
    });
    slide.save()
        .then(s => {
            res.redirect('/admin');
        })
        .catch(err => {
            console.log(err)
        })
}
exports.removeSlide = (req, res) => {
    const sId = req.params.sId;
    Slider.findByIdAndRemove(sId)
        .then(s => {
            fs.unlink(`public${s.img}`, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            res.send({
                msg: 'ok'
            })
        })
        .catch(err => {
            console.log(err)
        })
}
/* slider  end*/
/* about  start*/
exports.about = (req, res) => {
    const ar = req.body.ar;
    const en = req.body.en;
    const clints = req.body.clints;
    const projects = req.body.projects;
    About.findOne()
        .then(a => {
            if (a) {
                a.ar = ar;
                a.en = en;
                a.clints = clints;
                a.projects = projects;
                if (req.file) {
                    fs.unlink(`public${a.img}`, err => {
                        if (err) {
                            console.log(err)
                        }
                    })
                    a.img = req.file.path.split('public')[1];
                }
                return a.save()
            } else {
                const a = new About({
                    ar: ar,
                    en: en,
                    clints: clints,
                    projects: projects,
                    img: req.file.path.split('public')[1]
                })
                return a.save()
            }
        })
        .then(a => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
/* about end*/
/* serv start */
exports.addServ = (req, res) => {
    const img = req.file.path.split('public')[1];
    const title = {
        ar: req.body.titlear,
        en: req.body.titleen
    };
    const content = {
        ar: req.body.ar,
        en: req.body.en
    }
    const serv = new Serv({
        img: img,
        title: title,
        content: content
    })
    serv.save()
        .then(s => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.removeServ = (req, res) => {
    const id = req.params.id;
    Serv.findByIdAndRemove(id)
        .then(s => {
            fs.unlink(`public${s.img}`, (err) => {
                console.log(err)
            })
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}

/* serv end */
/* project start */
exports.addProject = (req, res) => {
    const name = {
        ar: req.body.namear,
        en: req.body.nameen
    };
    const desc = {
        ar: req.body.descar,
        en: req.body.descen
    };
    const categ = req.body.categ;
    const img = req.file.path.split('public')[1];
    const project = new Project({
        name: name,
        desc: desc,
        categ: categ,
        img: img
    })
    project.save()
        .then(s => {
            res.redirect('/admin');
        })
        .catch(err => {
            console.log(err)
        })
}
exports.addProjectCateg = (req, res) => {
    const ar = req.body.ar;
    const en = req.body.en;
    const categ = new Projectcateg({
        ar: ar,
        en: en
    })
    categ.save()
        .then(c => {
            res.redirect('/admin');
        })
        .catch(err => {
            console.log(err)
        })
}
exports.removeProjectCateg = (req, res) => {
    const id = req.params.id;
    Projectcateg.findByIdAndRemove(id)
        .then(p => {
            res.send({
                msg: 'ok'
            })
        })
        .catch(err => {
            console.log(err)
        })
}
exports.removeProject = (req, res) => {
    const id = req.params.id;
    Project.findByIdAndRemove(id)
        .then(p => {
            fs.unlink(`public${p.img}`, (err) => {
                console.log(err)
            })
            res.send({
                msg: 'ok'
            })
        })
        .catch(err => {
            console.log(err)
        })
}

/* project end */
/* parten start */
exports.addParten = (req, res) => {
    const name = {
        ar: req.body.nameAr,
        en: req.body.nameEn
    };
    const caption = {
        ar: req.body.captionAr,
        en: req.body.captionEn
    }
    const img = req.file.path.split('public')[1];
    const parten = new Parten({
        name: name,
        caption: caption,
        img: img
    });
    parten.save()
        .then(p => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.removeParten = (req, res) => {
    const id = req.params.id;
    Parten.findByIdAndRemove(id)
        .then(p => {
            fs.unlink(`public${p.img}`, (err) => {
                console.log(err)
            })
            res.send({
                msg: 'ok'
            })
        })
        .catch(err => {
            console.log(err)
        })
}
/* parten end */
/* admin login */
exports.getAdminLogin = (req, res) => {
    res.render('admin/login')
}
exports.postAdminLogin = (req, res) => {
    const password = req.body.password;
    if (password == process.env.PASS) {
        req.session.admin = true;
        res.redirect('/admin')
    } else {
        res.send('error: wrong password !')
    }
}
exports.adminLogOut = (req, res) => {
    req.session.destroy();
    res.redirect('/')
}
