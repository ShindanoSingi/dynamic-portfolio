const User = require("../models/userModel");
const Award = require("../models/awardModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");
const { Router } = require("express");

// Create a new award
router.post("/create-award", authMiddleware, async (req, res) => {
    try {
        const {name, description, image, userId} = req.body;

        // Check if the user weith the provided userId exists
        const userExists = await User.findById(userId);

        if (!userExists) {
            return res.send({
                message: "User does not exist",
                success: false,
            });
        }

        // Upload image to cloudinary

        // const uploadedImage = await cloudinary.v2.uploader.upload(image, {
        //     folder: "awards",
        //     width: 150,
        //     crop: "scale",
        // });

        // Create a new award
        const newAward = await Award({
            name,
            description,
            // image: uploadedImage.secure_url,
            // cloudinaryId: uploadedImage.public_id,
            user: userId,
        });

        // Save the new award
        await newAward.save();

        // Push the new award to the user's awards array
        userExists.awards.push(newAward._id);
        await userExists.save();

        return res.send({
            message: "Award created successfully",
            success: true,
        });


    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Get all awards
router.get("/get-awards", authMiddleware, async (req, res) => {
    try {

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});



module.exports = router;