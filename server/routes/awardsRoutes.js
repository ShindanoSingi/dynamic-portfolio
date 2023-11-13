const User = require("../models/userModel");
const Award = require("../models/awardModel");

const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const cloudinary = require("cloudinary");


// Create a new award
router.post("/create-award", authMiddleware, async (req, res) => {
    try {
        const {name, description, image, userId} = req.body;

        // Check if the user with the provided userId exists
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
            data: newAward,
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
    // Check if the user with the given userId exist
    const {userId} = req.body;

    const user = await User.findById(userId);

    if(!user){
        return res.send({
            message: "User does not exist",
            success: false,
        });
    }

    // Get all awards
    const awards = await Award.find({user: userId});

    return res.send({
        message: "Awards fetched successfully",
        success: true,
        data:awards,
    });

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Get an award
router.get("/get-award/:id", authMiddleware, async (req, res) => {
    try {
        // Check if the user with the given userId exist
        const {userId} = req.body;

        const user = await User.findById(userId);

        if(!user){
            return res.send({
                message: "User does not exist",
                success: false,
            });
        }

        // Get the award with the given id
        const award = await Award.findById(req.params.id);

        if(!award){
            return res.send({
                message: "Award does not exist",
                success: false,
            });
        }

        return res.send({
            message: "Award fetched successfully",
            success: true,
            data:award,
        });

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Update an award
router.put("/update-award/:id", authMiddleware, async (req, res) => {
    const { awardId } = req.params;
    try {
        const updatedAward = await Award.findByIdAndUpdate(awardId, req.body, { new: true });

    if (!updatedAward) {
      return res.send({
        success: false,
        message: 'Award not found',
      });
    }

    return res.send({
        success: true,
        message: 'Award updated successfully',
        data:updatedAward,
    });

    } catch (error) {
        return res.send({
            message: error.message,
            success: false,
        });
    }
});

// Delete an award by ID
router.delete('/delete-award/:awardId', async (req, res) => {
    const { awardId } = req.params;

    try {
      const deletedAward = await Award.findByIdAndDelete(awardId);

      if (!deletedAward) {
        return res.send({
            success: false,
            message: 'Award not found',
        });
      }

      // Remove the award ID from the associated user's awards array
      const user = await User.findById(deletedAward.user);
      if (user) {
        user.awards = user.awards.filter((id) => id.toString() !== awardId);
        await user.save();
      }

      return res.send({
        success: true,
        message: 'Award deleted successfully',
        data: deletedAward,
      });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
  });



module.exports = router;