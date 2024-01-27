const User = require("../models/userModel");
const Experience= require("../models/experienceModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

const cloudinary = require("../cloudinary");

// Create a new experience
router.post("/create-experience", authMiddleware, async (req, res) => {
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

            // Upload image to cloudinary
            const image = req.body.image;

            const uploadedImage = await cloudinary.uploader.upload(image, {
                  folder: 'assets',
            });

            // Create new experience
            const newExperience = new Experience({
                  ...req.body,
                  image: uploadedImage.secure_url
            });
            newExperience.user = userId;
            await newExperience.save();

            // Update user's experience
            userExists.experience.push(newExperience.id);

            await userExists.save();
            userExists.populate('experience')

            return res.send({
                  message: "Experience created successfully",
                  success: true,
                  data: newExperience
            })
        } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
        }
});

// Get all experiences
router.get("/get-experiences", async (req, res) => {
      try {
            // const experiences = await Experience.find().populate('user').populate('experiences');
            const experiences = await User.find().populate('experience');

            return res.send({
                  message: "Experiences fetched successfully",
                  success: true,
                  data:experiences
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get a single experience
router.get("/get-experience/:id", authMiddleware, async (req, res) => {
      try {
            const { userId } = req.body;

            // Check if user already exists
            const userExists = await User.findById(userId);

            if (!userExists) {
                  return res.send({
                        message: "User not found",
                        success: false
                  });
            }

            const experience = await Experience.findById(req.params.id);

            return res.send({
                  message: "Experience fetched successfully",
                  success: true,
                  data:experience
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Update an experience
router.put("/update-experience/:id", authMiddleware, async (req, res) => {
      try {
            const { userId } = req.body;

            // Check if user already exists
            const userExists = await User.findById(userId);

            if (!userExists) {
                  return res.send({
                        message: "User not found",
                        success: false
                  });
            }

            // Upload image to cloudinary
            const image = req.body.image;
            const uploadedImage = await cloudinary.uploader.upload(image, {
                  folder: 'assets',
            })

            const experience = await Experience.findByIdAndUpdate(req.params.id,
                  {
                        ...req.body,
                        image: uploadedImage.secure_url
                  }
                  , { new: true });

            return res.send({
                  message: "Experience updated successfully",
                  success: true,
                  data:experience
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Delete an experience
router.delete("/delete-experience/:id", authMiddleware, async (req, res) => {
      try {
            const { userId } = req.body;

            // Check if user already exists
            const userExists = await User.findById(userId);

            if (!userExists) {
                  return res.send({
                        message: "User not found",
                        success: false
                  });
            }

            const deletedExperience = await Experience.findByIdAndDelete(req.params.id);

            if (!deletedExperience) {
                return res.send({
                      message: "Experience not found",
                      success: false
                });
          }

            // Remove a single education from the user's education array
            const user = await User.findById(deletedExperience.user);
            user.experience.pull(deletedExperience.id);

            await user.save();

            return res.send({
                  message: "Experience deleted successfully",
                  success: true,
                  data:deletedExperience
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});


module.exports = router;

