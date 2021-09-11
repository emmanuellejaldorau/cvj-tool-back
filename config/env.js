const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  mongodb_uri: process.env.MONGODB_URI,
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
};