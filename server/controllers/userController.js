const pool = require("../db");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("error retrieving users");
  }
};
