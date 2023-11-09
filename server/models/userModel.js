const mongoose = require('mongoose');
const { Education } = require('./educationModel');
const { Experience } = require('./experienceModel');
const { Project } = require('./projectModel');
const { Award } = require('./awardModel');
const { Certification } = require('./certificationModel');


const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    phoneNumber: { type: String, required: false},
    role: { type: String, default:'user'},
    date: {
        type: Date,
        default: Date.now
    },
    streetName: { type: String, required: false },
    streetNumber: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    postalCode: { type: String, required: false },
    github: { type: String, required: false },
    linkedin: { type: String, required: false },
    twitter: { type: String, required: false },
    facebook: { type: String, required: false },
    instagram: { type: String, required: false },
    profilePicture: { type: String, required: false },
    profilePictureName:{
        type: String,
        required: false
    },
    resetPasswordToken: { type: String, required: false },
    resetPasswordExpires: { type: Date, required: false },
    title: { type: String, required: false },
    description:{
        type: String,
        required: false
    },
    stacks: { type: String, default: 'Full Stack' },
    about: { type: String, required: false },
    skills:[
        {
        name: { type: String, required: false },
        skill: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }
    }
    ],
    education:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Education'

    }],
    experience:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experience'

    }],
    projects:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    awards:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Award'
    }],
    certifications:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Certification'

    }],
    contact: {
        email: { type: String, required: false },
        phoneNumber: { type: String, required: false },
        website: { type: String, required: false },
        address: {
          streetName: { type: String, required: false },
          streetNumber: { type: String, required: false },
          city: { type: String, required: false },
          state: { type: String, required: false },
          postalCode: { type: String, required: false },
        },
      },
      resume: {
        resumeName: { type: String, required: false },
        resumeType: { type: String, required: false },
        resumeUrl: { type: String, required: false },
      },
      socialMedia: {
        gitHub: { type: String, required: false },
        linkedIn: { type: String, required: false },
        twitter: { type: String, required: false },
        facebook: { type: String, required: false },
        instagram: { type: String, required: false },
      },
      profilePicture: { type: String, required: false }
});

 module.exports = mongoose.model('User', userSchema);