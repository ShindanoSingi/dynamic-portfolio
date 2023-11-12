const User = require("../models/userModel");
const Education = require("../models/educationModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");

// Create a new education
router.post("/create-education", authMiddleware, async (req, res) => {
      try {
            // Get user's Id
            const { userId } = req.body;

            // Check if user already exists
            const userExists = await User.findById(userId);

            if (!userExists) {
                  return res.send({
                        message: "User not found",
                        success: false
                  });
            }

            // Create new education
            const newEducation = new Education(req.body);
            await newEducation.save();

            // Update user's education
            userExists.education.push(newEducation.id);

            await userExists.save();

            return res.send({
                  message: "Education created successfully",
                  success: true,
                  education: newEducation
            })
        } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
        }
});

module.exports = router;