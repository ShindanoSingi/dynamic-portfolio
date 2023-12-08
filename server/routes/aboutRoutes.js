const User = require("../models/userModel");
const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

// Add an about to the user
router.post("/add-about", authMiddleware, async (req, res) => {
    try {
        const {userId, about} = req.body;

        // Check if the user with the provided userId exists
        const userExists = await User.findById(userId);

        if (!userExists) {
            return res.send({
                message: "User does not exist",
                success: false,
            });
        }

        // Add the about to the user
        userExists.about = about;
        await userExists.save();

        return res.send({
            message: "About added successfully",
            success: true,
            data: userExists,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Get an about
router.get("/get-about", authMiddleware, async (req, res) => {
    try {
        // Check if the user with the given userId exist
        const {userId} = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.send({
                message: "User does not exist",
                success: false,
            });
        }

        return res.send({
            message: "About fetched successfully",
            success: true,
            data: user.about,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Update an about
router.put("/update-about", authMiddleware, async (req, res) => {
    try {
        const {userId, about} = req.body;

        // Check if the user with the given userId exist
        const user = await User.findById(userId);

        if (!user) {
            return res.send({
                message: "User does not exist",
                success: false,
            });
        }

        // Update the about
        user.about = about;
        await user.save();

        return res.send({
            message: "About updated successfully",
            success: true,
            data: user.about,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Delete an about
router.delete("/delete-about", authMiddleware, async (req, res) => {
    try {
        const {userId} = req.body;

        // Check if the user with the given userId exist
        const user = await User.findById(userId);

        if (!user) {
            return res.send({
                message: "User does not exist",
                success: false,
            });
        }

        // Delete the about
        user.about = "";
        await user.save();

        return res.send({
            message: "About deleted successfully",
            success: true,
            data: user.about,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

module.exports = router;