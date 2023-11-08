const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
      {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },

            email: { type: String, required: true },
            password: { type: String, required: true },

            phoneNumber: { type: String, required: false },

            role: { type: String, default: 'user' },
            date: { type: Date, default: Date.now },
            
            streetName: { type: String, required: false },
            streetNumber: { type: String, required: false },
            city: { type: String, required: false },
            state: { type: String, required: false },
            postalCode: { type: String, required: false },

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
            stacks: { type: String, default: 'Full Stack' },
            about: { type: String, required: false },

            skills: [ {
                        name: { type: String, required: false },
                        skill: {
                                name: { type: String, required: false },
                                level: { type: Number, required: false },
                                yearsOfExperience: { type: Number, required: false },
                                icon: { type: String, required: false },
                            },
                  },
                ],

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
                        graduated: { type: Boolean, required: false },
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
                        title: { type: String, required: false },
                        problemToSolve: { type: String, required: false },
                        description: { type: String, required: false },
                        skills: [String],
                        technologiesUsed: [String],
                        responsabilities: [String],
                        challenges: [String],
                        testimonials: [String],
                        teamMembers: [String],
                        awardsAndAchievements: [String],
                        projectStatus: { type: String, required: false },
                        clientContactInformation: {
                              name: { type: String, required: false },
                              email: { type: String, required: false },
                              phoneNumber: { type: String, required: false },
                        },
                        live: { type: String, required: false },
                        gitHub: { type: String, required: false },
                        screenshots: [String],
                        videoDemo: { type: String, required: false },
                        imageType: { type: String, required: false },
                        startDate: { type: Date, required: false },
                        endDate: { type: Date, required: false },
                        duration: { type: String, required: false },
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
                address: {
                        streetName: { type: String, required: false },
                        streetNumber: { type: String, required: false },
                        city: { type: String, required: false },
                        state: { type: String, required: false },
                        postalCode: { type: String, required: false },
                 },
        },

        resume: {
                resumeName: { type: String, required: false },
                resumeType: { type: String, required: false },
                resumeUrl: { type: String, required: false },
        },

        socialMedia:{
                  gitHub: { type: String, required: false },
                  linkedIn: { type: String, required: false },
                  twitter: { type: String, required: false },
                  facebook: { type: String, required: false },
                  instagram: { type: String, required: false },
            }
    },

      {
            timestamps: true,
      }
);


module.exports = mongoose.model("User", userSchema);

