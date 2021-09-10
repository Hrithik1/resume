const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,

        required: true,
        ref: "Register",
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: Number,
    },
    profession: {
        type: String,
    },
    address: {
        type: String,
    },
    intro: {
        type: String,
    },
    skills: {
        type: String,
    },
    education: [
        {
            _id: false,
            degree: {
                type: String,
            },
            school: {
                type: String,
            },
            year: {
                type: String,
            },
        },
    ],
    projects: [
        {
            _id: false,
            title: {
                type: String,
            },
            work: {
                type: String,
            },
        },
    ],
});

const Resume = new mongoose.model("resume", resumeSchema);

module.exports = Resume;