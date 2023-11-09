const mongoose = require('mongoose');

const awardSchema = mongoose.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },
    image: { type: String, required: false },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
});

module.exports = mongoose.model('Award', awardSchema);