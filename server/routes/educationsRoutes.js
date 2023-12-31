const User = require("../models/userModel");
const Education = require("../models/educationModel");
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

// Create a new education
router.post("/create-education", uploadedImage.single('image'), authMiddleware, async (req, res) => {
      try {
            const {userId} = req.body;

            // Check if user already exists
            const userExists = await User.findById(userId).populate('education');

            if (!userExists) {
                  return res.send({
                        message: "User not found",
                        success: false
                  });
            }

            // Create new education
            const newEducation = new Education({
                  schoolLogo: req.file.path,
                  schoolName: req.body.schoolName,
                  degree: req.body.degree,
                  fieldOfStudy: req.body.fieldOfStudy,
                  grade: req.body.grade,
                  startDate: req.body.startDate,
                  endDate: req.body.endDate,
                  description: req.body.description,
                  graduated: req.body.graduated,
                  user: userId
            });

            newEducation.user = userId;
            await newEducation.save();

            // Update user's education
            userExists.education.push(newEducation.id);

            await userExists.save();

            return res.send({
                  message: "Education created successfully",
                  success: true,
                  data: newEducation
            })
        } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
        }
});

// Get all educations
router.get("/get-educations", async (req, res) => {
      try {
            const educations = await Education.find({user: req.body.userId});

            return res.send({
                  message: "Educations fetched successfully",
                  success: true,
                  data: educations
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get a single education
router.get("/get-education/:id", authMiddleware, async (req, res) => {

      try {
            const education = await Education.findById(req.params.id).populate('_id');

            return res.send({
                  message: "Education fetched successfully",
                  success: true,
                  data: education
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Update a single education
router.put("/update-education/:id", uploadedImage.single('image'), authMiddleware, async (req, res) => {

        try {
                const updatedEducation = await Education.findByIdAndUpdate(req.params.id,
                  req.body,
                  req.file.path ? {image: req.file.path} : '',
                    {new: true});
       updatedEducation.save();

                if (!updatedEducation){
                        return res.send({
                            message: "Education not found",
                            success: false
                        });
                }

                return res.send({
                    message: "Education fetched successfully",
                    success: true,
                    data: updatedEducation
                });
        } catch (error) {
                return res.send({
                    message: error.message,
                    success: false
                });
        }
});

// Delete a single education
router.delete("/delete-education/:id", authMiddleware, async (req, res) => {

        try {
                const deletedEducation = await Education.findByIdAndDelete(req.params.id);

                if (!deletedEducation){
                        return res.send({
                            message: "Education not found",
                            success: false
                        });
                }

                // Remove a single education from the user's education array
                const user = await User.findById(deletedEducation.user);
                user.education.pull(deletedEducation.id);
                user.education.filter((id) => deletedEducation.id !== id);

                await user.save();

                return res.send({
                    message: "Education deleted successfully",
                    success: true,
                        data: deletedEducation
                });
        } catch (error) {
                return res.send({
                    message: error.message,
                    success: false
                });
        }
});

module.exports = router;