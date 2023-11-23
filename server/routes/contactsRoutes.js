const User = require("../models/userModel");
const Contact = require("../models/contactModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

const multer = require("multer");


// Configure multer
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

const uploadedImage = multer({storage: storage})

// Create a new certification
router.post("/create-contact", uploadedImage.single('image'), authMiddleware, async (req, res) => {
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

            // Check f user already has a contact
            const existingContact = await Contact.findOne({ _id: userExists.contact });

            if (existingContact) {
                    return res.send({
                            message: "Contact already exists",
                            success: false
                    });
            }

            // Create new contact
            const newContact = new Contact({
                        name: req.body.name,
                        email: req.body.email,
                        phoneNumber: req.body.phoneNumber,
                        website: req.body.website,
                        streetName: req.body.streetName,
                        streetNumber: req.body.streetNumber,
                        city: req.body.city,
                        state: req.body.state,
                        postalCode: req.body.postalCode,
                        resumeName: req.body.resumeName,
                        resumeType: req.body.resumeType,
                        image: req.file.path,
                        gitHub: req.body.gitHub,
                        linkedIn: req.body.linkedIn,
                        twitter: req.body.twitter,
                        facebook: req.body.facebook,
                        instagram: req.body.instagram,
                        youtube: req.body.youtube,
                        user: userId,
            });
            await newContact.save();

            // Update user's contact
            userExists.contact = newContact;

            await userExists.save();

            return res.send({
                    message: "Contact created successfully",
                    success: true,
                    data: newContact
            });


      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get all certifications
router.get("/get-contact", authMiddleware, async (req, res) => {
      const { userId } = req.body;
      try {
            const user = await User.findById(userId);
            await user.populate("contact");

            return res.send({
                  message: "Contact fetched successfully",
                  success: true,
                  data: user.contact
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get a single certification
router.get("/get-contact/:id", uploadedImage.single('image'), authMiddleware, async (req, res) => {
      try {
            const contact = await Contact.findById(req.params.id);

            if (!contact) {
                  return res.send({
                        message: "Contact not found",
                        success: false
                  });
            }

            return res.send({
                  contact,
                  success: true,
                  data: contact
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Update a single contact
router.put("/update-contact/:id", uploadedImage.single('image'), authMiddleware, async (req, res) => {
      const { id } = req.params;
      const {userId} = req.body;
      console.log(userId);
      try {
            const user = await User.findById(userId).populate("contact");

            const updatedContact = await Contact.findByIdAndUpdate(req.params.id, {
                  name: req.body.name,
                  email: req.body.email,
                  phoneNumber: req.body.phoneNumber,
                  website: req.body.website,
                  streetName: req.body.streetName,
                  streetNumber: req.body.streetNumber,
                  city: req.body.city,
                  state: req.body.state,
                  postalCode: req.body.postalCode,
                  resumeName: req.body.resumeName,
                  resumeType: req.body.resumeType,
                  image: req.file.path,
                  gitHub: req.body.gitHub,
                  linkedIn: req.body.linkedIn,
                  twitter: req.body.twitter,
                  facebook: req.body.facebook,
                  instagram: req.body.instagram,
                  youtube: req.body.youtube,
            }, { new: true });

            if (!updatedContact) {
                    return res.send({
                            message: "Contact not found",
                            success: false,
                    });
            }

            updatedContact.save();

            user.contact = updatedContact;
            user.save();

            return res.send({
                  message: "Contact updated successfully",
                  success: true,
                  data: updatedContact
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Delete a single certification
router.delete("/delete-contact/:id", authMiddleware, async (req, res) => {
      try {
            const deletedContact = await Contact.findByIdAndDelete(req.params.id);

            if (!deletedContact) {
                  return res.send({
                        message: "Contact not found",
                        success: false
                  });
            }

            const user = await User.findById(req.body.userId);
            user.contact = null;
            user.save();

            return res.send({
                  message: "Contact deleted successfully",
                  success: true,
                  data: deletedContact
            });
      } catch (error) {
            return res.send({
                  message: error.message,
                  success: false
            });
      }
});

module.exports = router;
