const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
    companyLogo: { type: String, required: false },
    companyName: { type: String, required: false },
    jobTitle: { type: String, required: false },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    description: [String],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Experience', experienceSchema);