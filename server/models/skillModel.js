const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
        name: { type: String, required: false },
        description: { type: String, required: false },
        level: { type: Number, required: false },
        yearsOfExperience: { type: Number, required: false },
        icon: { type: String, required: false },
        startDate: { type: Date, required: false },
        endDate: { type: Date, required: false },
        duration: { type: String, required: false },
        fileAttachments: [String],
        user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
        }
    });

module.exports = mongoose.model('Skill', skillSchema);