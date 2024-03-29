const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Skill = require("../models/skillModel");

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

// Create a skill
router.post("/create-skill", uploadedImage.single('image'), authMiddleware, async (req, res) => {
      try {
            const { userId } = req.body;

            // Check if user already exists
            const user = await User.findById(userId);

            if (!user) {
                  return res.send({
                        status: "error",
                        message: "User does not exist"
                  });
            }

            const skill = await Skill.create({
                  ...req.body,
                  image: req.file.path
            });
            skill.user = userId;
            await skill.save();

            user.skills.push(skill._id);

            await user.save();

            return res.send({
                  success: true,
                  message: "Skill successfully created",
                  data: skill
            });
      } catch (error) {
            return res.send({
                  success: false,
                  message: "Error in finding user",
                  data: error.message
            });
      }
});

// Get all skills
router.get("/get-skills", async (req, res) => {
      // const { userId } = req.body;
      try {
            // const user = await User.findById(userId);
            // if (!user) {
            //       return res.send({
            //             success: false,
            //             message: "User does not exist"
            //       });
            // }

            const skills = await Skill.find({});

            console.log(skills);

            return res.send({
                  success: true,
                  message: "Skills successfully retrieved",
                  data: skills
            });
      } catch (error) {
            return res.send({
                  success: false,
                  message: "Error in finding user",
                  data: error.message
            });
      }
});

// Get a single skill
router.get("/get-skill/:id", authMiddleware, async (req, res) => {
  const { userId } = req.body;
      try {
            const user = await User.findById(userId);

            if (!user) {
                  return res.send({
                        success: false,
                        message: "User does not exist"
                  });
            }

            const skill = await Skill.findById(req.params.id);

            if (!skill) {
                  return res.send({
                        success: false,
                        message: "Skill does not exist"
                  });
            }

            return res.send({
                  success: true,
                  message: "Skill successfully retrieved",
                  data: skill
            });
      } catch (error) {
            return res.send({
                  success: false,
                  message: "Error in finding skill",
                  data: error.message
            });
      }
});

// Update a skill
router.put("/update-skill/:id", uploadedImage.single('image'), authMiddleware, async (req, res) => {
      const { userId } = req.body;
      try {
            const user = await User.findById(userId);

            if (!user) {
                  return res.send({
                        success: false,
                        message: "User does not exist"
                  });
            }

            const skill = await Skill.findById(req.params.id);

            if (!skill) {
                  return res.send({
                        success: false,
                        message: "Skill does not exist"
                  });
            }

            const updatedSkill = await Skill.findByIdAndUpdate(
                  req.params.id,
                  {
                        ...req.body,
                        image: req.file.path
                  },
                  { new: true }
            );

            return res.send({
                  success: true,
                  message: "Skill successfully updated",
                  data: updatedSkill
            });
      } catch (error) {
            return res.send({
                  success: false,
                  message: "Error in finding skill",
                  data: error.message
            });
      }
});

// Delete a skill
router.delete("/delete-skill/:id", authMiddleware, async (req, res) => {
      const { userId } = req.body;
      try {
            const user = await User.findById(userId);

            if (!user) {
                  return res.send({
                        success: false,
                        message: "User does not exist"
                  });
            }

            const skill = await Skill.findById(req.params.id);

            if (!skill) {
                  return res.send({
                        success: false,
                        message: "Skill does not exist"
                  });
            }

            await Skill.findByIdAndDelete(req.params.id);

            // Delete skill from user's skills array
            user.skills.pull(req.params.id);

            await user.save();


            return res.send({
                  success: true,
                  message: "Skill successfully deleted"
            });
      } catch (error) {
            return res.send({
                  success: false,
                  message: "Error in finding skill",
                  data: error.message
            });
      }
});


module.exports = router;
