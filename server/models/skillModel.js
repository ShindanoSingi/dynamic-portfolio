const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String, required: false },
        startDate: { type: Date, required: false },
        endDate: { type: Date, required: false },
        duration: { type: String, required: false },
        demoLoginCredentials: {
                type: String,
                required: false,
        },
        fileAttachments: [String],
        user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
        }
    });

module.exports = mongoose.model('Skill', skillSchema);