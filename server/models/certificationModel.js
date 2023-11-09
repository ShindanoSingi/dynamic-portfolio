const mongoose = require('mongoose');

const certificationSchema = mongoose.Schema({
        title: { type: String, required: false },
        description: { type: String, required: false },
        date: { type: Date, required: false },
        certificationUrl: { type: String, required: false },
        certificationUrlName: { type: String, required: false },
        certificationFile: { type: String, required: false },
        certificationFileName: { type: String, required: false },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    });

module.exports = mongoose.model('Certification', certificationSchema);
