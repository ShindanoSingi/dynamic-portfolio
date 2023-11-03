const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
      {
            firstName: { type: String, required: true },
            lastName: { type: String, required: false },

            email: { type: String, required: false },
            password: { type: String, required: true },

            phoneNumber: { type: String, required: true },

            role: { type: String, required: true },
            date: { type: Date, default: Date.now },

            streetName: { type: String, required: true },
            streetNumber: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            postalCode: { type: String, required: true },

            gitHub: { type: String, required: false },
            linkedIn: { type: String, required: false },
            twitter: { type: String, required: false },
            facebook: { type: String, required: false },
            instagram: { type: String, required: false },

            profilePicture: { type: String, required: false },
            profilePictureName: { type: String, required: false },
            profilePictureType: { type: String, required: false },

            title: { type: String, required: false },
            description: { type: String, required: false },

            about: { type: String, required: false },



            skills: {
                  category: {
                        name: { type: String, required: false },
                        skills: [String],
                  },
            },
            education: [
                  {
                        schoolLogo: { type: String, required: false },
                        schoolName: { type: String, required: false },
                        degree: { type: String, required: false },
                        fieldOfStudy: { type: String, required: false },
                        grade: { type: String, required: false },
                        startDate: { type: Date, required: false },
                        endDate: { type: Date, required: false },
                        description: { type: String, required: false },
                  },
            ],

            experience: [
                    {
                        companyLogo: { type: String, required: false },
                        companyName: { type: String, required: false },
                        jobTitle: { type: String, required: false },
                        startDate: { type: Date, required: false },
                        endDate: { type: Date, required: false },
                        description: [String],
                    },
                ],

            projects: [
                  {
                        title: { type: String, required: true },
                        problemToSolve: { type: String, required: true },
                        description: { type: String, required: true },
                        skills: [String],
                        technologiesUsed: [String],
                        responsabilities: [String],
                        challenges: [String],
                        testimonials: [String],
                        teamMembers: [String],
                        awardsAndAchievements: [String],
                        projectStatus: { type: String, required: true },
                        clientContactInformation: {
                              name: { type: String, required: true },
                              email: { type: String, required: true },
                              phoneNumber: { type: String, required: true },
                        },
                        live: { type: String, required: true },
                        gitHub: { type: String, required: true },
                        screenshots: [String],
                        videoDemo: { type: String, required: false },
                        imageType: { type: String, required: true },
                        startDate: { type: Date, required: true },
                        endDate: { type: Date, required: true },
                        duration: { type: String, required: true },
                        demoLoginCredentials: {
                              type: String,
                              required: false,
                        },
                        fileAttachments: [String],
                  },
            ],


      awards: [
            {
                  title: { type: String, required: false },
                  description: { type: String, required: false },
                  date: { type: Date, required: false },
            },
      ],
        certifications: [
                {
                    title: { type: String, required: false },
                    description: { type: String, required: false },
                    date: { type: Date, required: false },
                },
        ],

        contact: {
                email: { type: String, required: false },
                phoneNumber: { type: String, required: false },
                website: { type: String, required: false },
                address: { type: String, required: false },
        },

        resume: {
                resumeName: { type: String, required: false },
                resumeType: { type: String, required: false },
                resumeUrl: { type: String, required: false },
        },
    },

      {
            timestamps: true,
      }
);


module.exports = mongoose.model("User", userSchema);

