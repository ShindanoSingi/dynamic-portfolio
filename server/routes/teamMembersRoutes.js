const User = require("../models/userModel");
const Project = require("../models/projectModel");
const TeamMember = require("../models/teamMemberModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");

// Create a new Team member
router.post('/projects/:projectId/add-team-member', authMiddleware, async (req, res) => {
    try {
        const { projectId } = req.params;
        const { userId } = req.body;

        const project = await Project.findById(projectId);
        const user = await User.findById(userId);

        if (!project || !user) {
            return res.send({
                message: "Project or User not found",
                success: false
            })
        }

        const teamMember = await TeamMember.create(req.body);

        const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            { $push: { teamMembers: teamMember._id } },
            { new: true }
        ).populate("teamMembers");

        if(!updatedProject) {
            return res.send({
                message: "Project not found",
                success: false
            })
        }

        res.send({
            message: "Team member added successfully",
            success: true,
            data: updatedProject
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;