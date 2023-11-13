const User = require("../models/userModel");
const Project = require("../models/projectModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");

// Create a new project
router.post("/create-project", authMiddleware, async (req, res) => {
    try {
        const userExists = await User.findById(req.body.userId);

        if (!userExists) {
            return res.send({
                message: "User does not exist",
                success: false,
            });
        }

        const newProject = await Project({
            ...req.body,
            user: req.body.userId,
        });

        await newProject.save();

        userExists.projects.push(newProject._id);
        await userExists.save();

        return res.send({
            message: "Project created successfully",
            success: true,
            data: newProject
        });

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Get all projects
router.get("/get-projects", authMiddleware, async (req, res) => {
    try {
        const projects = await Project.find({ user: req.body.userId });
        return res.send({
            message: "Projects retrieved successfully",
            success: true,
            data:projects,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Get a single project
router.get("/get-project/:id", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        return res.send({
            message: "Project retrieved successfully",
            success: true,
            data:project,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Update a project
router.put("/update-project/:id", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        await Project.findByIdAndUpdate(req.params.id, req.body);

        return res.send({
            message: "Project updated successfully",
            success: true,
            data: project,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Delete a project
router.delete("/delete-project/:id", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        await Project.findByIdAndDelete(req.params.id);

        return res.send({
            message: "Project deleted successfully",
            success: true,
            data: project,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

module.exports = router;