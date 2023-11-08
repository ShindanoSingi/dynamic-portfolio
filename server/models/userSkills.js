const mongoose = require('mongoose');
const User = require('./userModel');

const userSkillsSchema = mongoose.Schema({
    name: { type: String, required: false },
    skill: [{
        name: { type: String, required: false },
        level: { type: Number, required: false },
        yearsOfExperience: { type: Number, required: false },
        icon: { type: String, required: false },
    }],

    user: { type: mongoose.Schema.Types.ObjectId, ref: User },
});

const UserSkills = mongoose.model('Skills', userSkillsSchema);
