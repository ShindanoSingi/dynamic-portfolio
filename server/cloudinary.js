const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const image = './images/CMCCM.png';

// Upload image
// cloudinary.uploader.upload(image, (error, result) => {
//     console.log(result, error);
// });

module.exports = cloudinary;