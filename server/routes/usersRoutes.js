const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");

// User registration
router.post("/register", async (req, res) => {
    try {
            // Check if email already exists in database
            const user = await User.findOne({ email: req.body.email });

            if (user) {
                return res.send ({
                    message: "User already exists",
                    success: false,
                })
            }

            // Create new user
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;
            const newUser = await User(req.body);
            await newUser.save();
            return res.send({
                message: "User created successfully",
                success: true,
            });

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// User login
router.post("/login", async (req, res) => {
    try {
        // Check if the user is already registered
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.send({
                message: "Invalid e-mail",
                success: false,
            });
        }

        // Check if the password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.send({
                message: "Invalid password",
                success: false,
            });
        }

        // Create and assign a token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        return res.send({
            message: "Logged in successfully",
            token: token,
            success: true,
        });

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Get current user
router.get("/get-current-user", authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.body.userId });
        return res.send({
            message:'User fetched successfully',
            success: true,
            user: user,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Get all users
router.get("/get-all-users", async (req, res) => {
    try {
        const users = await User.find();
        return res.send({
            message: "Users fetched successfully",
            success: true,
            users: users,
        });
    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Update a user
router.put("/update-user", authMiddleware, async (req, res) => {
    try {
        // Check if the user is already registered
        const user = await User.findOne({ _id: req.body.userId });

        if (!user) {
            return res.send({
                message: "User not found",
                success: false,
            });
        }

        // Check if the user is the same
        if (user._id.toString() !== req.body.userId.toString()) {
            return res.send({
                message: "You are not allowed to update this user",
                success: false,
            });
        }

        // Update user
        const updatedUser = await User.findByIdAndUpdate(req.body.userId, req.body, { new: true });
        return res.send({
            message: "User updated successfully",
            success: true,
            user: updatedUser,
        });

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Delete user if role is not Admin
router.delete("/delete-user", authMiddleware, async (req, res) => {
    try {
        // Check if the user is already registered
        const user = await User.findOne({ _id: req.body.userId });

        // Check if the user is the Admin
        if (user.role === "Admin") {
            return res.send({
                message: "You are not allowed to delete the Admin",
                success: false,
            });
        }

        // Delete user
        await User.findByIdAndDelete(req.body.userId);
        return res.send({
            message: "User deleted successfully",
            success: true,
        });

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
})




module.exports = router;