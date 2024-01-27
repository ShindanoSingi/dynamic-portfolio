const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
    image: { type: String, required: false},
    companyName: { type: String, required: false },
    jobTitle: { type: String, required: false },
    startDate: { type: String, required: false },
    endDate: { type: String, required: false },
    description: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Experience', experienceSchema);

