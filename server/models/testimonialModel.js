const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);