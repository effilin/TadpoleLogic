const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cloudinary = require("../utils/cloudinary");

const upload = multer({
  dest: "uploads/",
});

const imageUpload = [
  upload.single("profile_image"),

  async function (req, res, next) {
    console.log("uploading files from browser");
    console.log(req.body);
    if (!req.file) {
      return next();
    }
    try {
      const filepath = req.file.path;
      console.log(filepath);
      const result = await cloudinary.uploader.upload(filepath, {
        folder: "profileImgs",
        resource_type: "image",
      });
      req.imageUrl = result.secure_url;
      fs.unlinkSync(filepath);
      next();
    } catch (err) {
      console.log(`error in cloudinary upload: ${err}`);
    }
  },
];

module.exports = imageUpload;
