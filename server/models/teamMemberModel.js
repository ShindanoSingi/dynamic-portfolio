const mongoose = require('mongoose');

const teamMemberSchema = mongoose.Schema({
        firstName: { type: String, required: false },
        lastName: { type: String, required: false },
        email: { type: String, required: false },
        phoneNumber: { type: String, required: false },
        role: { type: String, required: false },
        bio: { type: String, required: false },
        photo: { type: String, required: false },
        socialMediaLinks: { type: String, required: false },
        fileAttachments: [String],
        user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
        }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);