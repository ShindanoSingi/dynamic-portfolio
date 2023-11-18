const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Testimonial = require("../models/testimonialModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");

// Create a new Testimonial route
router.post('/projects/:projectId/add-testimonial', authMiddleware, async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const { userId } = req.body;

        const testimonialData = req.body;

        const testimonial = await Testimonial.create(testimonialData);

        const updatedProject = await Project.findByIdAndUpdate(projectId, { $push: { testimonials: testimonial._id } }, { new: true }).populate("testimonials");

        if(!updatedProject) {
            return res.send({
                message: "Project not found",
                success: false
            })
        }

        return res.send({
            message: "Testimonial added successfully",
            success: true,
            data: testimonial
        });

    } catch (error) {
        res.send({ message: "Something went wrong",
        success: false})
    }
});

// Get all team members
router.get('/projects/:projectId/testimonials', async (req, res) => {
    try {
        const projectId = req.params.projectId;

        // Find the project and populate the testimonials field
        const project = await Project.findById(projectId).populate("testimonials");

        if(!project) {
            return res.send({
                message: "Project not found",
                success: false
            })
        }

        return res.send({
            message: "Testimonials fetched successfully",
            success: true,
            data: project.testimonials
        });
    } catch (error) {
        res.send({ message: "Something went wrong",
        success: false})
    }
});

// Get a single testimonial
router.get('/projects/:projectId/testimonials/:testimonialId', async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const testimonialId = req.params.testimonialId;

        // Find the project and populate the testimonials field
        const project = await Project.findById(projectId).populate("testimonials");

        if(!project) {
            return res.send({
                message: "Project not found",
                success: false
            })
        }

        const testimonial = project.testimonials.find(testimonial => testimonial._id == testimonialId);

        if(!testimonial) {
            return res.send({
                message: "Testimonial not found",
                success: false
            })
        }

        return res.send({
            message: "Testimonial fetched successfully",
            success: true,
            data: testimonial
        });
    } catch (error) {
        res.send({ message: "Something went wrong",
        success: false})
    }
});

// Update a testimonial
router.put('/projects/:projectId/testimonials/:testimonialId', async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const testimonialId = req.params.testimonialId;

        const updatedTestimonialData = req.body;

        // Use findByIdAndUpdate to update the testimonial
        const updateTestimonial = await Testimonial.findByIdAndUpdate(testimonialId, updatedTestimonialData, { new: true });

        if(!updateTestimonial) {
            return res.send({
                message: "Testimonial not found",
                success: false
            })
        }

        return res.send({
            message: "Testimonial updated successfully",
            success: true,
            data: updateTestimonial
        });

    } catch (error) {
        res.send({ message: "Something went wrong",
        success: false})
    }
});

// Delete a testimonial
router.delete('/projects/:projectId/testimonials/:testimonialId', async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const testimonialId = req.params.testimonialId;

        // Use findByIdAndDelete to delete the testimonial
        const deletedTestimonial = await Testimonial.findByIdAndDelete(testimonialId);

        if(!deletedTestimonial) {
            return res.send({
                message: "Testimonial not found",
                success: false
            })
        }

        // Find the project and remove the testimonial from the testimonials array
        const updatedProject = await Project.findByIdAndUpdate(projectId, { $pull: { testimonials: testimonialId } }, { new: true }).populate("testimonials");

        if(!updatedProject) {
            return res.send({
                message: "Project not found",
                success: false
            })
        }

        return res.send({
            message: "Testimonial deleted successfully",
            success: true,
            data: deletedTestimonial
        });

    } catch (error) {
        res.send({ message: "Something went wrong",
        success: false})
    }
});

module.exports = router;