const User = require("../models/userModel");
const Project = require("../models/projectModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

const multer = require("multer");


// Configure multer
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    }
});

const uploadedImage = multer({storage: storage})

// Create a new project
router.post("/create-project", uploadedImage.single('image'), authMiddleware, async (req, res) => {
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
            image: req.file.path,
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
        const project = await Project.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        project.save();

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

// Add a skill to the project
router.put("/add-skill/:id", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        console.log(req.body.skill);

        // console.log(project);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        project.skills.push(req.body.skill);
        await project.save();

        // console.log(project.skills)

        return res.send({
            message: "Skill added successfully",
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

// Update a skill within the project
router.put("/update-skill/:id", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        const skillIndex = project.skills.findIndex(skill => skill._id == req.body.skillId);


        return res.send({
            message: "Skill updated successfully",
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

// Attach a file to the project
router.put("/attach-file/:id", uploadedImage.single('image'), authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        project.fileAttachments.push(req.file.path);
        await project.save();

        return res.send({
            message: "File attached successfully",
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