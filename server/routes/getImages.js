const express = require("express");
const router = express.Router();
const { cloudinary } = require("../utils/cloudinary");

router.get("/", async (req, res) => {
  console.log("fetching file hit");
  const myUrl = process.env.CLOUDINARY_URL;
  try {
    const { publicId } = req.query;
    if (!publicId) {
      return res.status(400).json({ error: "missing publicID" });
    }
    const ImageUrl = `${myUrl}/${publicId}/fetch`;
    const results = await cloudinary.image(`${myUrl}/${publicId}/fetch`);
    console.log(`image fetched: ${ImageUrl}`);
    res.json({ ImageUrl, results });
  } catch (error) {
    console.error("fetch error");
    res.status(500).json({ error: "failed fetch error getImages.js" });
  }
});

module.exports = router;
