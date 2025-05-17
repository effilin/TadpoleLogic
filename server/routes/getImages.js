const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");

router.get("/", async (req, res) => {
  console.log("fetching file hit");

  try {
    const { publicId } = req.query;
    if (!publicId) {
      return res.status(400).json({ error: "missing publicID" });
    }
    const imageUrl = cloudinary.url("woodworking_house1");
    console.log(imageUrl);
    res.json({ imageUrl });
  } catch (error) {
    console.error("fetch error");
    res.status(500).json({ error: "failed fetch error getImages.js" });
  }
});

module.exports = router;
