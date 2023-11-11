const User = require("../models/userModel");
const Certification = require("../models/certificationModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");

// Create a new certification
router.post("/create-certificate", authMiddleware, async (req, res) => {
      try {
            // Get user's Id
            const { userId } = req.body;

            // Check if the user with the provided userId exists
            const userExists = await User.findById(userId);

            if (!userExists) {
                  return res.send({
                        message: "User does not exist",
                        success: false
                  });
            }

            // Create a new certification
            const newCertification = new Certification(req.body);

            newCertification.user = userId;

            // Save the new certification
            await newCertification.save();

            // Push the new certification to the user's certifications array
            userExists.certifications.push(newCertification._id);
            await userExists.save();

            return res.send({
                  message: "Certification created successfully",
                  success: true
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get all certifications
router.get("/get-certificates", authMiddleware, async (req, res) => {
      try {
            const { userId } = req.body;

            // Check if the user with the provided userId exists
            const userExists = await User.findById(userId);

            if (!userExists) {
                  return res.send({
                        message: "User does not exist",
                        success: false
                  });
            }

            const certifications = await Certification.find({
                  user: userId
            });

            return res.send({
                  message: "Certifications retrieved successfully",
                  success: true,
                  certifications
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get a single certification
router.get("/get-certificate/:id", authMiddleware, async (req, res) => {
      try {
            const certificationId = req.params.id;

            // Check if the user already has a certificate with the provided id
            const certificationExists = await Certification.findById(
                  certificationId
            );

            if (!certificationExists) {
                  return res.send({
                        message: "Certification does not exist",
                        success: false
                  });
            }

            return res.send({
                  message: "Certification retrieved successfully",
                  success: true,
                  certification: certificationExists
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Update a certification
router.put("/update-certificate/:id", authMiddleware, async (req, res) => {
      const certificationId = req.params.id;
      console.log(certificationId);
      try {
            // Update the certification
            const updatedCertification = await Certification.findByIdAndUpdate(
                  certificationId,
                  req.body,
                  {
                        new: true
                  }
            );

            if (!updatedCertification) {
                  return res.send({
                        message: "Certification does not exist",
                        success: false
                  });
            }

            return res.send({
                  message: "Certification updated successfully",
                  success: true
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Delete a certification
router.delete("/delete-certificate/:id", authMiddleware, async (req, res) => {
      const certificationId = req.params.id;

      try {
            const deletedCertificate = await Certification.findByIdAndDelete(
                  certificationId
            );

            console.log(deletedCertificate);

            if (!deletedCertificate) {
                  return res.send({
                        message: "Certification does not exist",
                        success: false
                  });
            }

            // Delete the certification from the user's certifications array
            const user = await User.findById(deletedCertificate.user);


            if(user){
                user.certifications = user.certifications.filter((id) => id.toString() !== certificationId);
                await user.save();
            }

            return res.send({
                  message: "Certification deleted successfully",
                  success: true
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

module.exports = router;
