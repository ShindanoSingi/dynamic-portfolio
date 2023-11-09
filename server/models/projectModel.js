const mongoose = require("mongoose");

// projectSchema
const projectSchema = mongoose.Schema({
      title: { type: String, required: false },
      problemToSolve: { type: String, required: false },
      description: { type: String, required: false },
      skills: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Skill'
      }],
      technologiesUsed: [String],
      responsabilities: [String],
      challenges: [String],
      testimonials: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Testimonial'
      }],
      teamMembers: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'TeamMember'
      }],
      awardsAndAchievements: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Award'
      }],
      projectStatus: { type: String, default: 'Incomplete' },
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
      user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
      }
});

module.exports = mongoose.model("Project", projectSchema);

