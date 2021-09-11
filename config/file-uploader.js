const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloud_name, api_key, api_secret } = require('./env');

cloudinary.config({
  cloud_name,
  api_key,
  api_secret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params:{
    folder: "contacts-input",
    format: async (req, file) => 'raw', // supports promises as well
    public_id: (req, file) => 'computed-filename-using-request',
  }
  
});

const fileUploader = multer({ storage });

module.exports = fileUploader;