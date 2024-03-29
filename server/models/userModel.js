const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    phoneNumber: { type: String, required: false},
    role: { type: String, default:'user'},
    date: {type: Date, default: Date.now},
    streetNumber: { type: String, required: false },
    streetName: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    postalCode: { type: String, required: false },
    github: { type: String, required: false },
    linkedin: { type: String, required: false },
    twitter: { type: String, required: false },
    facebook: { type: String, required: false },
    instagram: { type: String, required: false },
    image: { type: String, required: false },
    title: { type: String, required: false },
    about:{type: String, required: false},
    stacks: [{ type: String, default: 'Full Stack' }],
    profilePicture: { type: String, required: false },
    skills:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill'

    }],
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
    contact:
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
    }
    ,
    resume:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume'
    }
    ],
    socialMedia:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SocialMedia'
    }
    ],
},{
    timestamps: true
});

 module.exports = mongoose.model('User', userSchema);