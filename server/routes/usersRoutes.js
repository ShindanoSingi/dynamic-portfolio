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

module.exports = router;