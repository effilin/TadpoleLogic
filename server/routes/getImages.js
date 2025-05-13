const express = require("express");
const router = express.Router();
const { cloudinary } = require("../utils/cloudinary");

router.get("/", async (req, res) => {
  console.log("fetching file hit");
  try {
    const myUrl = process.env.CLOUDINARY_URL;
    const { publicId } = req.query;
    console.log(publicId);
    console.log(`${myUrl}/${publicId}/fetch`);
    const results = await cloudinary.image(`${myUrl}/${publicId}`);
    console.log(results);
    res.json(results);
  } catch (error) {
    console.error("fetch error");
    res.status(500).json({ error: "failed fetch error getImages.js" });
  }
});

module.exports = router;
