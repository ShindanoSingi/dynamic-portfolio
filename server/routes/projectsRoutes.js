const User = require("../models/userModel");
const Project = require("../models/projectModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

// Cloudinary
const cloudinary = require("../cloudinary");


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

        // Get image from client
        const image = req.body.image;

        // Upload image to Cloudinary and get the url from there
        const uploadedImage = await cloudinary.uploader.upload(image, {
            folder: 'assets',
        });

        const newProject = await Project({
            title: req.body.title,
            problemToSolve: req.body.problemToSolve,
            description: req.body.description,
            skills: req.body.skills,
            technologiesUsed: req.body.technologiesUsed,
            responsabilities: req.body.responsabilities,
            challenges: req.body.challenges,
            testimonials: req.body.testimonials,
            teamMembers: req.body.teamMembers,
            awardsAndAchievements: req.body.awardsAndAchievements,
            projectStatus: req.body.projectStatus,
            clientContactInformation: req.body.clientContactInformation,
            live: req.body.live,
            gitHub: req.body.gitHub,
            screenshots: req.body.screenshots,
            video: req.body.video,
            image: uploadedImage.secure_url,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            duration: req.body.duration,
            demoLoginCredentials: req.body.demoLoginCredentials,
            techStacks: req.body.techStacks,
            user: req.body.userId,
        });

        await newProject.save();

        console.log(newProject);

        userExists.projects.push(newProject._id);
        await userExists.save();

        return res.send({
            message: "Project created successfully",
            success: true,
            data: newProject
        });

    } catch (error) {
        console.log(error);
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Get all projects
router.get("/get-projects", async (req, res) => {
    try {
        const projects = await Project.find();
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
        const user = await User.findById(req.body.userId);
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

        user.Project = project;

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
router.put("/attach-file/:id", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        // Get image from client
        const image = req.body.image;

        // Upload image to Cloudinary and get the url from there
        const uploadedImage = await cloudinary.uploader.upload(image, {
            folder: 'assets',
        });

        project.screenshots.push(uploadedImage.secure_url);

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

// Add Tech Stack
router.put("/add-tech-stack", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        // Get image from client
        const image = req.body.image;

        // Upload image to Cloudinary and get the url from there
        const uploadedImage = await cloudinary.uploader.upload(image, {
            folder: 'assets',
        });

        project.techStacks.push({
            name: req.body.name,
            image: uploadedImage.secure_url,

        });
        await project.save();

        return res.send({
            message: "Tech Stack added successfully",
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

// Get the tech stacks of a project
router.get("/get-tech-stacks/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        return res.send({
            message: "Tech Stacks retrieved successfully",
            success: true,
            data: project.techStacks,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Update the tech stacks of a project
router.put("/update-tech-stack/:id", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        // Get image from client
        const image = req.body.image;

        // Upload image to Cloudinary and get the url from there
        const uploadedImage = await cloudinary.uploader.upload(image, {
            folder: 'assets',
        });

        const techStackIndex = project.techStacks.findIndex(techStack => techStack._id == req.body.techStackId);

        project.techStacks[techStackIndex] = {
            name: req.body.name,
            image: uploadedImage.secure_url,
        };
        await project.save();

        return res.send({
            message: "Tech Stack updated successfully",
            success: true,
            data: project.techStacks[techStackIndex],
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Delete a tech stack from a project
router.delete("/delete-tech-stack/:id", authMiddleware, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.send({
                message: "Project not found",
                success: false,
            });
        }

        const techStackIndex = project.techStacks.findIndex(techStack => techStack._id == req.body.techStackId);

        project.techStacks.splice(techStackIndex, 1);
        await project.save();

        return res.send({
            message: "Tech Stack deleted successfully",
            success: true,
            data: project.techStacks,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

module.exports = router;