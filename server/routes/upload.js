const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cloudinary = require("../utils/cloudinary");

const upload = multer({
  dest: "uploads/",
});

router.post("/upload", upload.single("image"), async (req, res) => {
  console.log("uploading files from browser");
  try {
    const filepath = req.file.path;

    const result = await cloudinary.uploader.upload(filepath, {
      folder: "artImages",
      resource_type: "image",
    });

    fs.unlinkSync(filepath);
    res.json({ imageUrl: result.secure_url, publicId: result.public_id });
  } catch (err) {
    res.status(500).json({ error: "Image upload failed " });
  }
});

module.exports = router;
