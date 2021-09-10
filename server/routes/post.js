var express = require("express");
var router = express.Router();
const Resume = require("../Models/resume");
const Register = require('../Models/register');
const verifyToken = require("../middleware/authenticate");

router.post("/submit", verifyToken, async (req, res) => {
    try {
        console.log(req.body.data);
        const resume = new Resume({
            userId: req.userId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            profession: req.body.profession,
            address: req.body.address,
            intro: req.body.intro,
            skills: req.body.skills,
            education: [
                {
                    degree: req.body.degree,
                    school: req.body.school,
                    year: req.body.year,
                },
            ],
            projects: [{ title: req.body.title, work: req.body.work }],
        });
        const data = await resume.save();
        res.status(201).json({ message: "Resume created Successfully" });
    } catch (error) {
        res.status(404).json(req.body.data);
        console.log(error);
    }
});

router.get("/resume/:username", verifyToken, async (req, res) => {
    try {
        regData = await Register.findOne({ _id: req.userId });
        data = await Resume.findOne({ email: req.params.username });
        console.log(`regEmail: ${regData.email} ResumeEmail: ${data.email}`);
        if (JSON.stringify(data.userId) === JSON.stringify(req.userId)) {
            res.status(201).json(data);
        } else {
            res.status(401).json("Not authorised to access resume!!");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

