const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
    image: { type: String, required: true },
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Experience', experienceSchema);