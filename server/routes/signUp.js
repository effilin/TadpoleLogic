const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const pool = require("../db");
const jwt = require("jsonwebtoken");

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
        username: user.username,
        auth_level: user.auth_level || "user",
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

module.exports = router;
