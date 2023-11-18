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

// Get all team members
router.get('/projects/:projectId/get-team-members', authMiddleware, async (req, res) => {
try {
    const { projectId } = req.params;

    const project = await Project.findById(projectId).populate("teamMembers");

    if (!project) {
        return res.send({
            message: "Project not found",
            success: false
        })
    }

    res.send({
        message: "Team members fetched successfully",
        success: true,
        data: project.teamMembers
    });
} catch (error) {
    res.send({
        message: "Something went wrong",
        success: false
    });
}
})

// Get a single team member
router.get('/team-members/:teamMemberId', authMiddleware, async (req, res) => {
    try {
        const teamMember = await TeamMember.findById(req.params.teamMemberId);

        if (!teamMember) {
            return res.send({
                message: "Team member not found",
                success: false
            })
        }

        res.send({
            message: "Team member fetched successfully",
            success: true,
            data: teamMember
        });

    } catch (err) {

    }
});

// Update a team member
router.put('/team-members/:teamMemberId', authMiddleware, async (req, res) => {
    try {
        const teamMemberId = req.params.teamMemberId;

        const updatedTeamMember = await TeamMember.findByIdAndUpdate(teamMemberId, req.body, { new: true });

        if (!updatedTeamMember) {
            return res.send({
                message: "Team member not found",
                success: false
            })
        }

        res.send({
            message: "Team member updated successfully",
            success: true,
            data: updatedTeamMember
        });
    } catch (error) {
        res.send({ message: "Something went wrong",
        success: false });
    }
});

// Delete a team member
router.delete('/team-members/:teamMemberId', authMiddleware, async (req, res) => {
    try {
        const teamMemberId = req.params.teamMemberId;

        const deletedTeamMember = await TeamMember.findByIdAndDelete(teamMemberId);

        if (!deletedTeamMember) {
            return res.send({
                message: "Team member not found",
                success: false
            })
        }

        res.send({
            message: "Team member deleted successfully",
            success: true,
            data: deletedTeamMember
        });
    } catch (error) {
        res.send({ message: "Something went wrong",
        success: false });
    }
});

module.exports = router;