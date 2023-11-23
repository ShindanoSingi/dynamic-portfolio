const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
      {
            name: { type: String, required: true },
            email: { type: String, required: false },
            phoneNumber: { type: String, required: false },
            website: { type: String, required: false },

            streetName: { type: String, required: false },
            streetNumber: { type: String, required: false },
            city: { type: String, required: false },
            state: { type: String, required: false },
            postalCode: { type: String, required: false },

            resumeName: { type: String, required: false },
            resumeType: { type: String, required: false },
            image: { type: String, required: false },

            gitHub: { type: String, required: false },
            linkedIn: { type: String, required: false },
            twitter: { type: String, required: false },
            facebook: { type: String, required: false },
            instagram: { type: String, required: false },
            youtube: { type: String, required: false },
            user: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "User"
            },

            date: {
                  type: Date,
                  default: Date.now
            }
      },
      {
            timestamps: true
      }
);

module.exports = mongoose.model("Contact", contactSchema);
