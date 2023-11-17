const User = require("../models/userModel");
const Project = require("../models/projectModel");
const teamMember = require("../models/teamMemberModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");

// Create a new teamMember
router.post("/create-teamMember", authMiddleware, async (req, res) => {
      try {
            const { userId } = req.body;

            // Check if user already exists
            const user = await User.findById(userId);


            // if (!user) {
            //       return res.send({
            //             status: "error",
            //             message: "User does not exist"
            //       });
            // }

            const member = await teamMember.create(req.body);
            member.user = userId;
            await member.save();

            console.log(user.projects);

            user.projects.teamMembers.push(member._id);

            await user.save();

            console.log(user);

            return res.send({
                  success: true,
                  message: "teamMember successfully created",
                  data: member
            });
      } catch (error) {
            return res.send({
                  success: false,
                  message: "Error in finding user",
                  data: error.message
            });
      }
});

module.exports = router;