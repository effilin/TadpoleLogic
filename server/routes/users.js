const express = require("express");
const router = express.Router();
const pool = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userController = require("../controllers/userController");
const authToken = require("../middleware/authMiddleware");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const cloudinary = require("../utils/cloudinary");
const { UploadStream } = require("cloudinary");

const SECRET = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
  console.log("/ register route hit");
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await pool.query(
      "INSERT INTO users (user_name, password_hash) VALUES($1, $2)",
      [username, hashPassword]
    );
    const token = jwt.sign(
      {
        username: username,
        auth_level: "user",
      },
      SECRET,
      { expiresIn: "2h" }
    );
    res.status(201).json({ message: "User registered", token });
  } catch (err) {
    console.log("fail at signUp.js/ post:", err.message);
    res.status(500).json({ error: "registration failed", err });
  }
});

router.get("/", userController.getAllUsers);

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE user_name = $1",
      [username]
    );
    if (result.rows.length === 0) {
      return res.status(401).json({ error: "invalid Username or Password" });
    }
    const user = result.rows[0];
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ error: "Invalid Username or Password" });
    }
    const token = jwt.sign(
      {
        id: user.id,
        username: user.user_name,
        auth_level: user.auth_level || "user",
        profileImgUrl: user.profile_image || null,
        createdAt: user.created_at,
        updatedAt: user.updated_at || null,
      },
      SECRET,
      { expiresIn: "2h" }
    );
    res.status(200).json({ message: "Login Successful", token });
  } catch (err) {
    console.log("Login Error", err.message);
    res.status(500).json({ error: "Login failed" });
  }
});

router.put("/update", authToken, upload.single("image"), async (req, res) => {
  const userId = req.user.id;
  const { user_name, profile_image } = req.body;
  let secure_url;

  if (!!profile_image) {
    try {
      cloudinary.api
        .create_upload_preset({
          name: user_name,
          folder: "profileImgs",
          allowed_formats: "jpg, png",
        })
        .then((uploadResult) => {
          console.log(uploadResult);
          secure_url = uploadResult.url;
        });
    } catch (err) {
      res.status(500).json({ "error in cloudinary upload": err });
    }
  }

  try {
    const updatedUser = await pool.query(
      "UPDATE users SET user_name = $1, profile_image =$2 WHERE id =$3 RETURNING *",
      [user_name, secure_url, userId]
    );
    res.json(updatedUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("error updating user");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM users WHERE id =$1", [req.params.id]);
    res.send("User deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error deleting user");
  }
});

module.exports = router;
