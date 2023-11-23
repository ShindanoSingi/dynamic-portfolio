const mongoose = require('mongoose');

// educationSchema
const educationSchema = mongoose.Schema({
    image: { type: String, required: false },
    schoolName: { type: String, required: false },
    degree: { type: String, required: false },
    fieldOfStudy: { type: String, required: false },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    description: { type: String, required: false },
    graduated: { type: Boolean, required: false },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Education', educationSchema);