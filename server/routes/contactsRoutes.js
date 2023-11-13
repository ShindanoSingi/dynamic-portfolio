const User = require("../models/userModel");
const Contact = require("../models/contactModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");

// Create a new certification
router.post("/create-contact", authMiddleware, async (req, res) => {
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
            const newContact = new Contact(req.body);
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
router.get("/get-contact/:id", authMiddleware, async (req, res) => {
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

// Update a single certification
router.put("/update-contact/:id", authMiddleware, async (req, res) => {
      const { id } = req.params;
      const {userId} = req.body;
      console.log(userId);
      try {
            const user = await User.findById(userId).populate("contact");

            const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
            updatedContact.save();

            user.contact = updatedContact;
            user.save();

            if (!updatedContact) {
                    return res.send({
                            message: "Contact not found",
                            success: false,
                    });
            }

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
